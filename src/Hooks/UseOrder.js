import { useEffect, useState } from "react";

const UseOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/purchase')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    return [orders, setOrders]
}

export default UseOrder;