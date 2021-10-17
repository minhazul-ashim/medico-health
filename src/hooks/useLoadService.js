import { useEffect, useState } from 'react';

const useLoadService = (type) => {

    const [data, setData] = useState([])

    useEffect(() => {

        fetch(`/${type}.json`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return data;
};

export default useLoadService;