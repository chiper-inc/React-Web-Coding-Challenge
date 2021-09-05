import React from 'react';
import { useSelector } from 'react-redux';
import { StyledDiv, Button } from './styled';
import PropTypes from 'prop-types';

const Pagination = ({ paginate, cardsPerPage, handlePrev, handleNext }) => {
    const bikes = useSelector((state) => state.stolenBikes);

    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(bikes.length / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <StyledDiv className='pagination'>
            <ul>
                <Button onClick={handlePrev}>Prev</Button>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href='#'>
                            {number}
                        </a>
                    </li>
                ))}
                <Button onClick={handleNext}>Next</Button>
            </ul>
        </StyledDiv>
    );
};

Pagination.propTypes = {
    paginate: PropTypes.number,
    cardsPerPage: PropTypes.number,
    handlePrev: PropTypes.func,
    handleNext: PropTypes.func,
};

export default Pagination;
