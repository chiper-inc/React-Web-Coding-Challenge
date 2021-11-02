import { useEffect, useState } from 'react';
import { BarFilter, Header } from '../../components';
import BikeItem from '../../components/BikeItem';
import BikesServices from '../../utils/services/BikesServices';

const Home = () => {
  const [bikes, setBikes] = useState([]);

  const searchAll = async () => {
    try {
      const bikesResponse = await BikesServices.index();
      // console.log(bikesResponse.bikes);
      setBikes(bikesResponse.bikes);
    } catch (err) {
      console.error('Ocurrio un error', err);
    }
  };

  useEffect(() => {
    searchAll();
  }, []);

  return (
    <div className="home">
      <Header />
      <BarFilter />
      {bikes.map((bike) => {
        return <BikeItem bike={bike} />;
      })}
    </div>
  );
};

export default Home;
