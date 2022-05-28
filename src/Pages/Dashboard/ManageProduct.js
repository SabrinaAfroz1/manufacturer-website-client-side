import React, { useEffect, useState } from 'react';
import ProductRow from './ProductRow';

const ManageProduct = () => {

    const [tools, setTools] = useState([]);
    useEffect(() => {
        const url = 'https://calm-ridge-04381.herokuapp.com/tools';
        fetch(url)
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])

    return (
        <div>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th> SL No</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th> </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) =>
                                <ProductRow
                                    key={tool._id}
                                    tool={tool}
                                    index={index}
                                    setTools={setTools}
                                ></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};



export default ManageProduct;