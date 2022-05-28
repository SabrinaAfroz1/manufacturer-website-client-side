import React from 'react';
import UseOrder from '../../Hooks/UseOrder';


const ManageOrder = () => {
    const [orders, setOrders] = UseOrder();

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
                            </tbody>

                        )
                    }

                </table>
            </div>
        </div>
    );
};



export default ManageOrder;