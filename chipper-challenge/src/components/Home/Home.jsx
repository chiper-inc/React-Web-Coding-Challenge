import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';
import { getBikes } from '../../redux/actions';
import { Card } from '../Card/Card';
import { StyledDiv } from './styled';
import Pagination from '../Pagination/Pagination';
import HashLoader from 'react-spinners/HashLoader';
import Error from './../Error/Error';

const Home = () => {
    const dispatch = useDispatch();
    const { stolenBikes, loading } = useSelector((state) => state);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 10;
    const indexOfLastCard = currentPage * cardsPerPage;
    // indice del ultimo elemento de cada pagina
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    // indice del primer elemento de cada pagina
    const currentBikes = stolenBikes.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    // const page =
    //     new URLSearchParams(useLocation().search.slice(1)).get('page') || 0;
    // console.log(page);
    useEffect(() => {
        dispatch(getBikes());
    }, [dispatch]);

    return (
        <StyledDiv>
            <div className='container-cards'>
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
                        <div>
                            <Pagination
                                className='pagination'
                                paginate={paginate}
                                cardsPerPage={cardsPerPage}
                            />
                        </div>

                        {currentBikes &&
                            currentBikes.map((bike, idx) => {
                                return <Card key={idx} {...bike} />;
                            })}
                        <Pagination
                            paginate={paginate}
                            cardsPerPage={cardsPerPage}
                        />
                    </>
                ) : (
                    <Error />
                )}
            </div>
        </StyledDiv>
    );
};

export default Home;
