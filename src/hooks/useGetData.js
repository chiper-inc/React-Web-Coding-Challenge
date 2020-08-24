import { useState, useEffect } from 'react';

const useGetData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const fetchData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((bikes) => {
        setData(bikes);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
        // setError(
        //   'Hubo un error al obtener los datos, verifique la url o intente más tarde',
        // );
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchData(url);
    // return () => {
    //   console.log('ComponentWillUnMount');
    // };
  }, [url]);

  return [data, loading, fetchData];
};

export default useGetData;
