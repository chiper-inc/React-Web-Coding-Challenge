import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { bikeByIdService } from '../services/bike-by-id';
import BikeDetail from '../components/BikeDetail';

const DetailsBikePage = () => {
  const [bike, setBike] = useState(null);
  const params = useParams();

  useEffect(() => {
    service();
  }, []);

  const service = async () => {
    if (params.bikeId) {
      const { data } = await bikeByIdService(Number(params.bikeId));
      setBike(data);
    }
  };

  return (
    <BikeDetail bike={bike} />
  );
};

export default DetailsBikePage;
