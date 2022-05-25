import React from 'react';
import bannar from '../../images/bannar.jpg'

const Bannar = () => {
    return (
        <div className='px-12'>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={bannar} class="w-3/5 rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Your Smartest Way to Buy Building Materials </h1>
                        <p class="py-6">
                            Save 20-30% Off Home Improvement and Construction Materials
                        </p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Bannar;