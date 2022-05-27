import React from 'react';

const Review = (props) => {
    const { review } = props;
    return (
        <div className=" ">
            <div className="card h-96 lg:max-w-lg bg-base-100 shadow-xl ">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{review.name}</h2>
                    <p>{review.description}</p>

                </div>
            </div>
        </div>
    );
};

export default Review;