import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setPage } from '../../redux/actions';

const Pagination = () => {
    // create component to display pagination
    const history = useHistory();
    const dispatch = useDispatch();
    const { page, totalPages } = useSelector((state) => state.pagination);

    useEffect(() => {
        // update url to reflect current page
        history.push({
            pathname: '/',
            search: `?page=${page}`,
        });
    }, [page]);

    return (
        <div className='pagination'>
            <button
                className={page === 0 ? 'disabled' : ''}
                onClick={() => {
                    console.log('PREV clicked');
                    if (page >= 1) {
                        history.push({
                            pathname: '/',
                            search: `?page=${page - 1}`,
                        });
                        dispatch(setPage(page - 1));
                    }
                }}
            >
                Prev
            </button>
            <button
                className={page === totalPages ? 'disabled' : ''}
                onClick={() => {
                    console.log('NEXT clicked');
                    if (page < totalPages) {
                        history.push({
                            pathname: '/',
                            search: `?page=${page + 1}`,
                        });
                        dispatch(setPage(page + 1));
                    }
                }}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
