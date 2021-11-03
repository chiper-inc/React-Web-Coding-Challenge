import { useEffect, useState } from 'react';
import {
  BarFilter,
  BikeItem,
  Pagination,
  Loading,
  ErrorData,
  EmptyResult,
} from '../../components';
import BikesServices from '../../utils/services/BikesServices';

const Home = () => {
  const [bikes, setBikes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [titleSearch, setTitleSearch] = useState('');
  const [showError, setShowError] = useState(false);
  const [showEmptyResult, setShowEmptyResult] = useState(false);

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
      setShowError(false);
      console.error('Ocurrio un error', err);
    }
  };

  useEffect(() => {
    searchAll();
  }, []);

  useEffect(() => {
    searchAll();
  }, [page]);

  const activeSearchForTitle = async (titleSearch) => {
    setLoading(true);
    try {
      const search = await BikesServices.searchForTitle(titleSearch);
      setBikes(search.bikes);
      setLoading(false);
    } catch (err) {
      console.error('Active Search For Title', err);
      setLoading(false);
      setShowError(false);
    }
  };

  useEffect(() => {
    if (titleSearch.length >= 4) {
      activeSearchForTitle(titleSearch);
    } else {
      setShowEmptyResult(false);
      searchAll();
    }
  }, [titleSearch]);

  useEffect(() => {
    //@ts-ignore
    if (bikes.length <= 0) {
      setShowEmptyResult(true);
    } else {
      setShowEmptyResult(false);
    }
  }, [bikes]);

  return (
    <div className="home">
      <BarFilter titleSearch={titleSearch} setTitleSearch={setTitleSearch} />
      {loading ? (
        <Loading />
      ) : showError ? (
        <ErrorData />
      ) : showEmptyResult ? (
        <EmptyResult />
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
