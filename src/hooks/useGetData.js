import { useState, useEffect } from 'react';

const useGetData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchData(url);
  }, [url]);

  return [data, loading, fetchData];
};

export default useGetData;
