import { useEffect, useState } from "react";

const UseOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://calm-ridge-04381.herokuapp.com/purchase')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    return [orders, setOrders]
}

export default UseOrder;