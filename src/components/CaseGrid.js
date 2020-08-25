import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import { Pagination } from './Pagination';
import { useFetchCases } from '../hooks/useFetchCases';
import { CaseItem } from './CaseItem';

const rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;
const Circle = styled.p`
    border: 4px solid #f3f3f3;
    border-top: 4px solid #00264a;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: ${rotate} 1.3s linear infinite;
    display: inline-block;
    margin: 0 0 -5px;
`
const Loading = styled.div`
    padding: 20px;
    margin: 0 20px;
    color: #fff;
    background: #00264a;
    border-radius: 3px;
    text-align: center;
    font-size: 1.5rem;
`

export const CaseGrid = ({ category }) => {

    const [pagination, setPagination] = useState(1);

    const handlerPrev = () => {
        if (pagination > 1) {
            setPagination(pagination - 1);
        }
    }

    const handlerNext = () => {
        setPagination(pagination + 1);
    }

    const { data, loading } = useFetchCases(category, pagination);

    return (
        <>
            {loading && <Loading className="animate__animated animate__flash">Loading <Circle></Circle></Loading>}
            {data.length > 0 && <Pagination handlerNext={handlerNext} handlerPrev={handlerPrev} />}
            <div className="card-grid">
                {
                    data.map(img => (
                        <CaseItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div >
            {data.length > 0 && <Pagination handlerNext={handlerNext} handlerPrev={handlerPrev} />}
        </>
    )
}

CaseGrid.propTypes = {
    category: PropTypes.string.isRequired
}
