import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

const Pagination = () => {
    const history = useHistory();
    const len = useSelector(state => state.stolenBikes).length;
    const from = parseInt(new URLSearchParams(useLocation().search.slice(1)).get('from')) || 0;
    /*
        52
    */
   useEffect(() => {
   }, [from]);
   console.log(from);
   console.log(typeof from);
    return (
        <div>
            <button
                onClick={() => history.push(`/?from=${0}`)} 
            >
                {'<<<<'}
            </button>
            <button
                onClick={() => history.push(`/?from=${from - 10}`)}
            >
                {'<<'}
            </button>
            <span
            >
                {from / 10}
            </span>
            <button
                style={{ visibility: len - 11 >= from ? 'visible' : 'hidden', cursor: 'pointer' }}
                onClick={() => history.push(`/?from=${from + 10}`)}
            >
                {'>>'}
            </button>
            <button
                style={{ visibility: from >= 70 || len - 1 - 30 >= from ? 'hidden' : 'visible', cursor: 'pointer' }}
                onClick={() => history.push(`/?from=${len - 10}`)}
            >
                {'>>>>'}
            </button>
        </div>
    );
};

export default Pagination;
