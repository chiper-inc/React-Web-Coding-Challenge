import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BikeIndexApi from '../api/BikeIndexApi';
import { BikeDetail } from '../interfaces/BikeDetailInterface';

interface Params {
  id: string
}

export const useDetail = () => {

  const { id } = useParams<Params>();

  const [detail, setDetail] = useState<BikeDetail>({} as BikeDetail);
  
  useEffect(() => {
    
    BikeIndexApi.get<BikeDetail>(`/bikes/${id}`)
      .then((res) => setDetail(res.data));
  }, []);
  return {
    detail,
  };
};

export default useDetail;
