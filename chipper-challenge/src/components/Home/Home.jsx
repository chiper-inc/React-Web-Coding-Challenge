import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getBikes } from '../../redux/actions';
import { Card } from '../Card/Card';
import { StyledDiv } from './styled';
import Pagination from '../Pagination/Pagination';

const Home = () => {
    const dispatch = useDispatch();
    const bikes = useSelector((state) => state.stolenBikes);
    const from =
        new URLSearchParams(useLocation().search.slice(1)).get('from') || 0;

    useEffect(() => {
        dispatch(getBikes());
    }, [dispatch]);

    return (
        <StyledDiv>
            <h3 className='total-thefts'>
                Total bikes stolen : {bikes.length}
            </h3>
            {bikes && bikes.length > 0 ? (
                <>
                    <Pagination />
                    {bikes &&
                        bikes.slice(from, from + 10).map((bike, idx) => {
                            return <Card key={idx} {...bike} />;
                        })}
                    <Pagination />
                </>
            ) : (
                <h2>Loading</h2>
            )}
        </StyledDiv>
    );
};

export default Home;
