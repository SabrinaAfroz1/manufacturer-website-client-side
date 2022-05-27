import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const addReview = data => {

        const Review = {
            email: user.email,
            name: user.displayName,
            rating: data.rating,
            comment: data.comment
        }
        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(Review)
        })
            .then(res => res.json())
            .then(result => {
                alert("added");

            })

    }

    return (
        <div>
            <div className='lg:mx-24'>
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <div class="card-body lg:m-24">
                        <div>
                            <p>Customer Name : {user.displayName} </p>
                            <p> Email Address : {user.email}</p>

                        </div>
                        <form className="form-control w-full max-w-xs " onSubmit={handleSubmit(addReview)}>
                            <input className='mb-2' type="text" pattern="[0-9]*" required placeholder='Rating'{...register("rating")} />


                            <textarea className='mb-5' placeholder='Write Here' required {...register("comment")} />

                            <input class="input input-bordered bg-primary w-full max-w-xs mb-5" type="submit" value="Add Review" />

                        </form>

                    </div>
                </div>



            </div>

        </div>
    );
};

export default AddReview;