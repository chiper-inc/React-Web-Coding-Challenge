import React from 'react';
import BikeCard from '../BikeCard/BikeCard';
import useGetData from '../../hooks/useGetData';

const ListOfCards = () => {
  const [data, loading, error] = useGetData(
    'https://bikewise.org:443/api/v2/incidents?incident_type=theft&proximity=berlin',
  );
  console.log(data);
  return (
    <section>
      { (data.length === 0) ? (
        <h1>Loading</h1>
      ) :
        (
          data.incidents.map((bikes) => <BikeCard key={bikes.id} {...bikes} />)
        )}
    </section>
  );
};

export default ListOfCards;
