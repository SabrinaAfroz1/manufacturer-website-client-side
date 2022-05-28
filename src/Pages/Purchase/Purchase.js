import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import useToolDetails from '../../Hooks/useToolDetails';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { toolId } = useParams();
    const [tool, setTool] = useToolDetails(toolId);
    const { register, handleSubmit } = useForm();


    const productPurchase = event => {
        const availableQuantity = parseInt(tool.available);

        const newQuantity = parseInt(event.target.addquantity.value);

        if (newQuantity > 50 && newQuantity < availableQuantity) {
            const eachprice = parseInt(tool.price);
            const newquantity = parseInt(event.target.addquantity.value);
            const totalprice = eachprice * newquantity;

            const purchaseTool = {
                email: user.email,
                name: tool.name,
                image: tool.image,
                price: totalprice,
                quantity: event.target.addquantity.value,
            }
            event.preventDefault();
            const url = `http://localhost:5000/purchase`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(purchaseTool)
            })
                .then(res => res.json())
                .then(result => {
                    toast('Add to Cart');

                })


            const restQuantity = availableQuantity - newQuantity;
            const url1 = `http://localhost:5000/tools/${toolId}`
            fetch(url1, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ restQuantity })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);


                })
        }

        else {
            toast("quantity problem");
        }

    }


    return (
        <div className='lg:mx-24'>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='lg:w-48' alt=" " src={tool.image} /></figure>
                <div class="card-body lg:m-24">
                    <h2 class="card-title">{tool.name}</h2>
                    <p>{tool.description}</p>
                    <p> Price : {tool.price}</p>
                    <p>Available Quantity :{tool.available} </p>
                    <div>
                        <p>Customer Name : {user.displayName} </p>
                        <p> Email Address : {user.email}</p>

                    </div>
                    <form className="form-control w-full max-w-xs " onSubmit={productPurchase}>
                        <input class="input input-bordered input-primary w-full max-w-xs mb-5" type="text" name="address" placeholder='Address' id="" />
                        <input required class="input input-bordered input-primary w-full max-w-xs mb-5" type="text" name="phone" placeholder='Phone Number' id="" />
                        <input required class="input input-bordered input-primary w-full max-w-xs mb-5" type="text" placeholder='Quantity' name="addquantity" id="addquantity" />

                        <input class="input input-bordered bg-primary w-full max-w-xs mb-5" type="submit" value="Purchase" />

                    </form>

                </div>
            </div>



        </div>
    );
};

export default Purchase;