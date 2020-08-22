import React from 'react';
import BikeCard from '../BikeCard/BikeCard';
import useGetData from '../../hooks/useGetData';
import Section from './styles';

const ListOfCards = () => {
  const [data, loading, error] = useGetData(
    'https://bikewise.org:443/api/v2/incidents?page=1&per_page=10&incident_type=theft&proximity=berlin',
  );
  console.log(data);
  return (
    <Section>
      {data.length === 0 ? (
        <h1>Loading...</h1>
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
    </Section>
  );
};

export default ListOfCards;
