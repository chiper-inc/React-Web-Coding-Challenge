import { useEffect, useState } from 'react';
import {
  BarFilter,
  Header,
  BikeItem,
  Pagination,
  Loading,
} from '../../components';
import BikesServices from '../../utils/services/BikesServices';

const Home = () => {
  const [bikes, setBikes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  /* Aca se hace el calculo de total de paginas el 61 fue extraido de la documentacion
    de la API por alguna razon este valor no lo retornan en la data y por eso no se puede 
    saber dinamicamente el valor y se divide entre 9 para que me de un valor flotante mayor a 
    6.5 y esto de 7 que es el total de paginas filtradas por 10 items*/
  const totalPage = Math.round(61 / 9);

  const searchAll = async () => {
    try {
      const bikesResponse = await BikesServices.index(page);
      setLoading(false);
      // console.log(bikesResponse.bikes);
      setBikes(bikesResponse.bikes);
    } catch (err) {
      setLoading(false);
      console.error('Ocurrio un error', err);
    }
  };

  useEffect(() => {
    searchAll();
  }, []);

  useEffect(() => {
    searchAll();
  }, [page]);

  return (
    <div className="home">
      <BarFilter />
      {loading ? (
        <Loading />
      ) : (
        <>
          {bikes.map((bike) => {
            return <BikeItem bike={bike} />;
          })}
          <Pagination page={page} setPage={setPage} totalPage={totalPage} />
        </>
      )}
    </div>
  );
};

export default Home;
