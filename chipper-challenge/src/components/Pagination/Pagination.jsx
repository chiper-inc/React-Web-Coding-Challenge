import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setPage } from '../../redux/actions';
import { StyledDiv } from './styled';

const Pagination = () => {
    // create component to display pagination
    const history = useHistory();
    const dispatch = useDispatch();
    const { page, totalPages } = useSelector((state) => state.pagination);
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop);

    useEffect(() => {
        // update url to reflect current page
        history.push({
            pathname: '/',
            search: `?page=${page}`,
        });
    }, [page]);

    const handleNextClick = () => {
        if (page < totalPages) {
            history.push({
                pathname: '/',
                search: `?page=${page + 1}`,
            });
            dispatch(setPage(page + 1));
            scrollTop();
        }
    };

    const handlePrevClick = () => {
        if (page >= 1) {
            history.push({
                pathname: '/',
                search: `?page=${page - 1}`,
            });
            dispatch(setPage(page - 1));
        }
    };

    // const handlePageChange = (el) => {
    //     console.log(Number(el));
    //     return dispatch(setPage(el + 1));
    // };

    return (
        <StyledDiv className='pagination'>
            <button onClick={handlePrevClick}>Prev</button>
            {/* {arr.map((el, idx) => {
                return (
                    <a
                        href='#'
                        key={idx}
                        onClick={(el) => handlePageChange(el)}
                    >
                        {el}
                    </a>
                );
            })} */}
            <button onClick={handleNextClick}>Next</button>
        </StyledDiv>
    );
};

export default Pagination;
