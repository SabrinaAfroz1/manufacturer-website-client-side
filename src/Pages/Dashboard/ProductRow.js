import React from 'react';
import useTool from '../../Hooks/UseTool';


const ProductRow = ({ tool, index }) => {
    const { _id, price, available, name } = tool;

    const [tools, setTools] = useTool();

    const deleteTool = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/tools/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = tools.filter(etool => etool._id !== id);
                    setTools(remaining);
                })
        }
    }

    return (

        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>

            <td>{price}</td>
            <td>{available}</td>

            <td> <button onClick={() => deleteTool(_id)} className='btn btn-xs'>Delete</button>
            </td>

        </tr>


    );
};

export default ProductRow;

