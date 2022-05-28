import { useEffect, useState } from "react";

const useTool = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('https://calm-ridge-04381.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);
    return [tools, setTools]
}

export default useTool;