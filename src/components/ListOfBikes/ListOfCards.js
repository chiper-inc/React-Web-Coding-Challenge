import React, { useState, useEffect } from 'react';
import BikeCard from '../BikeCard/BikeCard';
import useGetData from '../../hooks/useGetData';
import { Section, P, Container, Button, Pages } from './styles';
import Loading from '../Loading/Loading';

const ListOfCards = () => {
  const [page, setPage] = useState(1);
  const [data, loading, error, fetchData] = useGetData(
    `https://bikewise.org:443/api/v2/incidents?page=${page}&per_page=10&incident_type=theft&proximity=berlin`,
  );

  const handleClickNext = () => {
    page === 7 ? setPage(page) : setPage(page + 1);
  };

  const handleClickLast = () => {
    page === 1 ? setPage(page) : setPage(page - 1);
  };

  useEffect(() => {
    fetchData(`https://bikewise.org:443/api/v2/incidents?page=${page}&per_page=10&incident_type=theft&proximity=berlin`);
  }, [page]);

  return (
    <Section>
      {data.length === 0 ? (
        <Loading />
      ) : (
        <>
          <P>
            Total cases:
            {' '}
            {data.incidents.length}
          </P>
          {data.incidents.length === 0 ? (
            <h1>No more cases</h1>
          ) :
            (
              <ul>
                {data.incidents.map((bike) => (
                  <BikeCard key={bike.id} {...bike} />
                ))}
              </ul>
            )}
          <Container>
            <div>
              <Button type='button' onClick={() => setPage(1)}>
                First Page
              </Button>
              <Button type='button' onClick={handleClickLast}>
                Previus Page
              </Button>
            </div>
            <Pages>
              {[1, 2, 3, 4, 5, 6].map((id) => (
                <li key={id} onClick={() => setPage(id)}>{id}</li>
              ))}
            </Pages>
            <div>
              <Button type='button' onClick={handleClickNext}>
                Next Page
              </Button>
              <Button type='button' onClick={() => setPage(6)}>
                Last Page
              </Button>
            </div>
          </Container>
        </>
      )}
    </Section>
  );
};

export default ListOfCards;
