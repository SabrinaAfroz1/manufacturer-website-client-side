import React from 'react';

const Tool = (props) => {
    const { tool } = props;
    return (
        <div className=" ">
            <div className="card h-96 lg:max-w-lg bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={tool.image} alt=" " className="rounded-xl w-1/2" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{tool.name}</h2>
                    <p>{tool.description}</p>

                </div>
            </div>
        </div>
    );
};

export default Tool;