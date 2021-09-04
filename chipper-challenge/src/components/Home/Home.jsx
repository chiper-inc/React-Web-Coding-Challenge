import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getBikes } from '../../redux/actions';
import { Card } from '../Card/Card';
import { StyledDiv } from './styled';
import Pagination from '../Pagination/Pagination';
import HashLoader from 'react-spinners/HashLoader';
import Error from './../Error/Error';

const Home = () => {
    const dispatch = useDispatch();
    const { stolenBikes, loading } = useSelector((state) => state);
    `11`;

    const page =
        new URLSearchParams(useLocation().search.slice(1)).get('page') || 0;
    console.log(page);
    useEffect(() => {
        dispatch(getBikes());
    }, [dispatch]);

    return (
        <StyledDiv>
            <h3 className='total-thefts'>
                Total bikes stolen:
                {stolenBikes && stolenBikes.length}
            </h3>
            {loading ? (
                <div className='loading'>
                    <HashLoader />
                </div>
            ) : stolenBikes && stolenBikes.length > 0 ? (
                <>
                    <Pagination />
                    {stolenBikes &&
                        stolenBikes
                            .slice(page * 10, page * 10 + 10)
                            .map((bike, idx) => {
                                return <Card key={idx} {...bike} />;
                            })}
                    <Pagination />
                </>
            ) : (
                <Error />
            )}
        </StyledDiv>
    );
};

export default Home;
