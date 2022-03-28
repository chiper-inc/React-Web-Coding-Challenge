import { useState, useEffect } from 'react';
import { getDetailsBike } from '../services/bikes';

export const useGetDetailsBike = ({id=''}) => {
    console.log('id', id)
    const [bikeDetail, setBikeDetail] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getDetailsBike({id})
        .then((result) => {
            setBikeDetail(result.data.bike);
            console.log(result.data.bike)
            setLoading(false);
        });
    }, [])
    
    return { bikeDetail, loading }
}
