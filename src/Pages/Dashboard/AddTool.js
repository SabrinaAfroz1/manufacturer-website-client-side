import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddTool = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        const myitem = {
            name: data.name,
            price: data.price,
            available: data.available,
            image: data.image,
            description: data.description
        }
        const url = 'https://calm-ridge-04381.herokuapp.com/tools';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(myitem)
        })
            .then(res => res.json())
            .then(result => {
                toast("added");
            })

    }
    return (
        <div className=' items-center justify-center w-50 mx-auto mt-5 shadow-lg rounded p-5 '>
            <h2 className=' text-success p-3 '>ADD ITEM</h2>

            <form className='form-control w-full max-w-xs  flex   ' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 input input-bordered w-full max-w-xs' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-3 input input-bordered w-full max-w-xs' required placeholder='Description' {...register("description")} />
                <input className='mb-3 input input-bordered w-full max-w-xs' required placeholder='price' type="number" {...register("price")} />
                <input className='mb-3 input input-bordered w-full max-w-xs' required placeholder='Quantity in kg' type="number" {...register("available")} />
                <input className='mb-3 input input-bordered w-full max-w-xs' required placeholder='Photo URL' type="text" {...register("image")} />
                <input className='btn btn-success' type="Submit" placeholder="Add Item" />
            </form>


        </div >
    );
};

export default AddTool;