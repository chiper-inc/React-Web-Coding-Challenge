import React from 'react';
import { useSelector } from 'react-redux';
import { StyledDiv } from './styled';
import PropTypes from 'prop-types';

const Pagination = ({ paginate, cardsPerPage }) => {
    const bikes = useSelector((state) => state.stolenBikes);

    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(bikes.length / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <StyledDiv className='pagination'>
            <ul>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href='#'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </StyledDiv>
    );
};

Pagination.propTypes = {
    paginate: PropTypes.number,
    cardsPerPage: PropTypes.number,
};

export default Pagination;
