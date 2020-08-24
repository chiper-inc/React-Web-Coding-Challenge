import React from 'react';
import { useParams } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';
import MapContainer from '../../components/Map/Map';

import { Div } from './styles';

const Detail = () => {
  const { id } = useParams();
  const URL = 'https://bikewise.org:443/api/v2/locations/markers?occurred_after=1594922400&incident_type=theft&proximity=Berlin';
  const [data, loading, fetchData] = useGetData(URL);
  const { features } = data;
  const PROPERTIES = loading ? [] : features[0].properties;
  const { title } = PROPERTIES;

  return (
    <main>
      <h1>{id}</h1>
      <Div>
        <MapContainer />
      </Div>
    </main>
  );
};

export default Detail;
