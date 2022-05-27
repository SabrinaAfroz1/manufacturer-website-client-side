import { useState, useEffect } from 'react';

const useToolDetails = toolId => {
    const [tool, setTool] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/tools/${toolId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [toolId]);

    return [tool, setTool];
}

export default useToolDetails;