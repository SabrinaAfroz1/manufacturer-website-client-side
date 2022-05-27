import React from 'react';

import slider1 from '../../images/slider1.jpg';
import slider2 from '../../images/slider2.jpg';
import slider3 from '../../images/slider3.jpg';


const Carousel = () => {
    return (
        <div>

            <div className='grid lg:grid-cols-3 gap-10 sm:grid-cols-1 md:grid-cols-2 mb-5'>
                <div className="card lg:max-w-lg bg-base-100 ">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl font-extrabold text-primary">  2000+</h2>
                        <p className='text-2xl text-secondary font-medium'>Customer</p>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 ">
                    <div className="card-body  items-center text-center">
                        <h2 className="card-title font-extrabold text-4xl text-primary">300+</h2>
                        <p className='text-2xl text-secondary font-medium'>Reviews</p>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 ">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-extrabold text-4xl text-primary">500+</h2>
                        <p className='text-2xl text-secondary font-medium'>Tools</p>
                    </div>
                </div>

            </div>

            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img alt='' src={slider1} class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img alt='' src={slider2} class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img alt='' src={slider3} class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Carousel;