import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBikes } from '../../redux/actions';
import Card from '../Card/Card';
import { StyledDiv } from './styled';
import Pagination from '../Pagination/Pagination';
import HashLoader from 'react-spinners/HashLoader';
import Error from './../Error/Error';

const Home = () => {
    const dispatch = useDispatch();
    const { stolenBikes, loading, type } = useSelector((state) => state);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 10;
    const indexOfLastCard = currentPage * cardsPerPage;

    // indice del ultimo elemento de cada pagina
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    // indice del primer elemento de cada pagina
    const currentBikes = stolenBikes.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        dispatch(getBikes());
    }, [dispatch]);

    useEffect(() => {
        if (type !== 'all') {
            setCurrentPage(1);
        }
    }, [dispatch, stolenBikes]);

    const handlePrev = () => {
        currentPage !== 1 && setCurrentPage(currentPage - 1);
        currentPage === 1 && alert('This is the first page');
    };
    const handleNext = () => {
        currentPage !== 6 && setCurrentPage(currentPage + 1);
        currentPage === 6 && alert('This is the last page');
    };

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
                                handlePrev={handlePrev}
                                handleNext={handleNext}
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
