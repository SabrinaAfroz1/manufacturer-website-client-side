import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const url = 'https://calm-ridge-04381.herokuapp.com/review';
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h2 className='text-primary font-bold text-xl'>Reviews </h2>
            </div>
            <div className='grid lg:grid-cols-3 gap-10 sm:grid-cols-1 md:grid-cols-2 '>

                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>
                    )
                }
            </div>


        </div>
    );
};

export default Reviews;