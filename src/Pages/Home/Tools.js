import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        const url = 'https://calm-ridge-04381.herokuapp.com/tools';
        fetch(url)
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h2 className='text-primary font-bold text-xl'>Tools </h2>
                <h1 className='text-4xl'> We Provide</h1>
            </div>
            <div className='grid lg:grid-cols-3 gap-10 sm:grid-cols-1 md:grid-cols-2 '>

                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>
                    )
                }
            </div>


        </div>
    );
};

export default Tools;