import React, { useState, useEffect } from 'react';
import BikeCard from '../BikeCard/BikeCard';
import useGetData from '../../hooks/useGetData';
import { Section, P, Container, Button } from './styles';
import Loading from '../Loading/Loading';

const ListOfCards = () => {
  const [page, setPage] = useState(1);
  const [data, loading, error, fetchData] = useGetData(
    `https://bikewise.org:443/api/v2/incidents?page=${page}&per_page=10&incident_type=theft&proximity=berlin`,
  );
  console.log(page);
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
          <ul>
            {data.incidents.map((bike) => (
              <BikeCard key={bike.id} {...bike} />
            ))}
          </ul>
          <Container>
            <Button type='button' onClick={handleClickLast}>
              Last Page
            </Button>
            <Button type='button' onClick={() => setPage(page + 1)}>
              Next Page
            </Button>
          </Container>
        </>
      )}
    </Section>
  );
};

export default ListOfCards;
