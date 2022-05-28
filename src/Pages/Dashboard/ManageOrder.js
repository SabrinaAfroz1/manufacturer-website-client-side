import React from 'react';
import UseOrder from '../../Hooks/UseOrder';


const ManageOrder = () => {
    const [orders, setOrders] = UseOrder();


    const deleteOrder = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://calm-ridge-04381.herokuapp.com/purchase/${orders._id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    }


    return (
        <div>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th> SL No</th>
                            <th>Email</th>
                            <th>Tool Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th> </th>

                        </tr>
                    </thead>
                    {
                        orders.map((order, index) =>
                            <tbody key={order}>
                                <td>{index + 1}</td>
                                <td>{order.email}</td>
                                <td>{order.name}</td>
                                <td>{order.quantity}</td>
                                <td>{order.price}</td>
                                <td> <button onClick={() => deleteOrder(order._id)} className='btn btn-xs'>Delete</button>
                                </td>
                            </tbody>

                        )
                    }

                </table>
            </div>
        </div>
    );
};



export default ManageOrder;