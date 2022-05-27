import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = (props) => {
    const { _id, name, description, image, price, quantity } = props.tool;
    const navigate = useNavigate();
    const navigateToPurchase = _id => {
        navigate(`/purchase/${_id}`);
    }
    return (
        <div className=" ">
            <div className="card h-96 lg:max-w-lg bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={image} alt=" " className="rounded-xl w-1/2" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Price :{price}</p>
                    <button onClick={() => navigateToPurchase(_id)} className='rounded-full'>Purchase</button>

                </div>
            </div>
        </div>
    );
};

export default Tool;