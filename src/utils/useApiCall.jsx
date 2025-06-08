import React, { useEffect, useState } from 'react'

function useApiCall(api) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function callAPI() {
            try {
                let resp = await fetch(api);
                let result = await resp.json();
                setData(result);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        callAPI();
    }, [api]);

    return {data, error, loading};
}

export default useApiCall