import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BikeIndexApi from '../../api/BikeIndexApi';
import { BikeDetail } from '../../interfaces/BikeDetailInterface';
import './StolenBike.css';
import noImg from '../../assets/no-img.jpg';
import Spinner from '../Spinner/Spinner';

interface Params {
  id: string
}

const viewDate = (date:number):string => (new Date(date * 1000).toDateString());

export default function StolenBike() {

  const { id } = useParams<Params>();

  const [detail, setDetail] = useState<BikeDetail>({} as BikeDetail);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    BikeIndexApi.get<BikeDetail>(`/bikes/${id}`)
      .then((res) => setDetail(res.data))
      .then(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;
  return (
    <div className="detailCtn fadeIn">
      <h1>{detail.bike.title}</h1>

      <div className="detailBody">

        <img src={detail.bike.large_img || noImg} alt="" />

        <div className="detailBodyRight">
          <h3>Description of the  incident:</h3>
          <p>{detail.bike.description}</p>

          <h4>Date of the theft:</h4>
          <span>{viewDate(detail.bike.date_stolen)}</span>
          <h4>Date of reported:</h4>
          <span>{viewDate(detail.bike.stolen_record.created_at)}</span>

          <h4>Location of the theft:</h4>
          <span>{detail.bike.stolen_location}</span>
        </div>
      </div>
    </div>
  );
}
