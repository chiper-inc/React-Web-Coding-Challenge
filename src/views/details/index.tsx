/* eslint-disable no-extend-native */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ErrorData, Loading } from '../../components';
import { DetailsType } from '../../types/types';
import BikesServices from '../../utils/services/BikesServices';
import './styles.scss';

interface DetailsProps {
  id: DetailsType['id'];
  info: any;
  dateTransform: string;
}
const Details = () => {
  const { id }: DetailsProps = useParams();
  const [info, setInfo]: DetailsProps['info'] = useState({});
  const [loading, setLoading] = useState(true);
  const [showError, setShowError] = useState(false);
  const [dateTransform, setDateTransform] = useState('');
  const searchID = async () => {
    try {
      const infoResponse = await BikesServices.searchID(id);
      console.log(infoResponse.bike);
      setInfo(infoResponse.bike);

      setLoading(false);
    } catch (err) {
      console.error('Ocurrio un error en search ID', err);
      setLoading(false);
      setShowError(true);
    }
  };

  useEffect(() => {
    searchID();
  }, []);

  useEffect(() => {
    let timestamp = info?.stolen_record?.date_stolen;
    let dateFormat = new Date(timestamp * 1000);
    let hours =
      dateFormat.getHours() === 0
        ? '12'
        : dateFormat.getHours() > 12
        ? dateFormat.getHours() - 12
        : dateFormat.getHours();
    let minutes =
      (dateFormat.getMinutes() < 10 ? '0' : '') + dateFormat.getMinutes();
    let ampm = dateFormat.getHours() < 12 ? 'AM' : 'PM';
    let formattedTime = hours + ':' + minutes + ' ' + ampm;
    let date = `${dateFormat.getFullYear()}-${
      dateFormat.getMonth() + 1 < 10 ? '0' : ''
    }${dateFormat.getMonth() + 1}-${
      dateFormat.getDate() < 10 ? '0' : ''
    }${dateFormat.getDate()} ${formattedTime}`;
    setDateTransform(date);
  }, [info]);

  return (
    <div className="details">
      {loading ? (
        <Loading />
      ) : showError ? (
        <ErrorData />
      ) : (
        <section className="detail-bike">
          <p className="stolen">stolen</p>
          <h1 className="title">
            {' '}
            {info?.year} <span>{info?.manufacturer_name}</span>{' '}
            {info?.frame_model}
          </h1>
          <p className="date">
            <span>Stolen </span>
            {dateTransform}
          </p>
        </section>
      )}
    </div>
  );
};

export default Details;
