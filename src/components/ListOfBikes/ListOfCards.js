import React, { useState, useEffect } from 'react';
import BikeCard from '../BikeCard/BikeCard';
import useGetData from '../../hooks/useGetData';
import Section from './styles';
import Loading from '../Loading/Loading';

const ListOfCards = () => {
  const [page, setPage] = useState(1);
  const [data, loading, error] = useGetData(
    `https://bikewise.org:443/api/v2/incidents?page=${page}&per_page=10&incident_type=theft&proximity=berlin`,
  );

  const handleClick = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    console.log(nextPage);
  };

  return (
    <Section>
      {data.length === 0 ? (
        <Loading />
      ) : (
        <>
          <p>
            Total cases:
            {' '}
            {data.incidents.length}
          </p>
          <ul>
            {data.incidents.map((bikes) => (
              <BikeCard key={bikes.id} {...bikes} />
            ))}
          </ul>
        </>
      )}
      {/* <button type='button' onClick={handleClick}>
        Next page
      </button> */}
    </Section>
  );
};

export default ListOfCards;
