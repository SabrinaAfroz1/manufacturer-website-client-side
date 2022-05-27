import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useToolDetails from '../../Hooks/useToolDetails';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { toolId } = useParams();
    const [tool, setTool] = useToolDetails(toolId);


    const productPurchase = event => {
        const availableQuantity = parseInt(tool.quantity);
        const newQuantity = parseInt(event.target.quantity.value);

        if (newQuantity > 50 && newQuantity > availableQuantity) {
            const purchaseTool = {
                email: user.email,
                name: tool.name,
                image: tool.image,
                price: tool.price,
                quantity: event.target.quantity.value,
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

                })


            const restQuantity = availableQuantity - newQuantity;
            const url1 = `http://localhost:5000/tools/${toolId}`
            fetch(url, {
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
            alert("quantity problem");
        }




    }


    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img alt=" " src={tool.image} /></figure>
                <div class="card-body">
                    <h2 class="card-title">{tool.name}</h2>
                    <p>{tool.description}</p>
                    <p> Price : {tool.price}</p>
                    <p>Available Quantity :{tool.quantity} </p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Listen</button>
                    </div>
                    <div>
                        <p>Customer Name : {user.displayName} </p>
                        <p> Email Address : {user.email}</p>

                    </div>
                    <form onSubmit={productPurchase}>
                        <input type="text" name="address" placeholder='Address' id="" />
                        <input type="text" name="phone" placeholder='Phone Number' id="" />
                        <input type="text" placeholder='Quantity' name="addquantity" id="" />
                        <input type="submit" value="Purchase" />

                    </form>
                </div>
            </div>



        </div>
    );
};

export default Purchase;