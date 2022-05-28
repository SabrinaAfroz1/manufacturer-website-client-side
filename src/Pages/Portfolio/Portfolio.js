import React from 'react';
import portfolio from '../../images/portfolio.png';

const Portfolio = () => {
    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl mx-16">
                <figure><img className='w-80' src={portfolio} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Name: Ms SabrinaAfroz</h2>
                    <h2 class="card-title">Email: sabrina1234091@gmail.com</h2>
                    <h3 className='font-bold'>Educational Background :</h3>
                    <h1>B.Sc in Computer Science and Engineering </h1>
                    <h1> International Islamic University Chittagong </h1>

                    <h3 className='font-bold'>List of Technologies/ Skill :</h3>
                    <h2><span className='font-medium'>Programming Language :</span> C, C++, Java, Python </h2>
                    <h2><span className='font-medium'>Mobile Application :</span> Android SDK Platform</h2>
                    <h2><span className='font-medium'>Web Programming :</span> HTML3, CSS, Javascript, JQuery, ReactJs, NodeJs</h2>
                    <h2><span className='font-medium'>Database Management :</span> MySQL, Firebase, Mongodb</h2>
                    <h2><span className='font-medium'>Office Tools :</span> Microsoft Office 2013(word,Excel,PowerPoint)</h2>

                    <h3 className='font-bold'>Project (live website link) :</h3>
                    <a className='text-primary' href='https://sabrinaafroz1.github.io/Project_Greenveg/'> https://sabrinaafroz1.github.io/Project_Greenveg/</a>
                    <a className='text-primary' href='https://sabrinaafroz1.github.io/PSD-NEW/'> https://sabrinaafroz1.github.io/PSD-NEW/</a>
                    <a className='text-primary' href='https://sabrina-assignment11.web.app/'> https://sabrina-assignment11.web.app/</a>








                </div>
            </div>


        </div>
    );
};

export default Portfolio;