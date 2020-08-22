import { useState, useEffect } from 'react';

const useGetData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    window.fetch(url)
      .then((response) => response.json())
      .then((bikes) => {
        setData(bikes);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError('Hubo un error al obtener los datos, verifique la url o intente más tarde');
      });
    return () => {
      console.log('ComponentWillUnMount');
    };
  }, []);

  return [data, loading, error];
};

export default useGetData;
