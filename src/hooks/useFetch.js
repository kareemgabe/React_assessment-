
import { useState, useEffect } from 'react';

const useFetch = (fetchFunction, params) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchFunction(params);
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [fetchFunction, params]);

    return { data, loading, error };
};

export default useFetch;
