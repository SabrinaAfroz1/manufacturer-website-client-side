import React from 'react';
import Footer from '../Shared/Footer';
import Bannar from './Bannar';
import Carousel from './Carousel';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div >
            <Bannar></Bannar>
            <Tools></Tools>
            <Carousel></Carousel>
            <Reviews></Reviews>
            <Footer></Footer>



        </div>
    );
};

export default Home;