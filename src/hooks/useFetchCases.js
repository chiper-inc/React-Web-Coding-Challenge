import { useState, useEffect } from 'react';
import { getCase } from '../helpers/getCase';

export const useFetchCases = (category, pagination) => {


    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        getCase(category, pagination)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            });

    }, [category, pagination]);

    return state;
}
