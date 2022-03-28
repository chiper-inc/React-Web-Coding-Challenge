import { useState, useEffect } from 'react';
import { getBikes, getCountBikes } from '../services/bikes';

const INITIAL_PAGE = 0; 

export const useGetBikes = () => {
    const [bikes, setBikes] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);
    const [query, setQuery] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        try {
            getBikes()
            .then((result) => {
                setBikes(result.data.bikes);
                getCount()
                setLoading(false);
            })
            .catch(err => {
                setError(true);
            });
        } catch (error) {
            setError(true);
        }
    }, []);

    useEffect(() => {
        const getBikesApi = async () => {
            setLoading(true);
            getBikes(query, page)
            .then((nextBikes) => {
                setBikes(nextBikes.data.bikes);
                getCount(query);
                setLoading(false);
            });
        }
        getBikesApi();
    }, [query, page]);

    const getCount = (query='') => {
        getCountBikes({query})
        .then((result) => setCount(result.data.stolen))
    }
    
    return {bikes, loading, error, page, setPage, setQuery, count};
}
