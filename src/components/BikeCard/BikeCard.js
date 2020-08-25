import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Description } from './styles';
import useConvertTime from '../../hooks/useConvertTime';

const BikeCard = (data) => {
  const { title, description, occurred_at, address, media, id } = data;
  const { image_url } = media;
  const [completeTime] = useConvertTime(occurred_at);
  const emptyImage = 'https://thumbs.dreamstime.com/b/bicicleta-vector-del-icono-de-la-bici-en-estilo-plano-117234922.jpg';

  return (
    <Card>
      <img src={image_url === null ? emptyImage : image_url} alt='Bike' />
      <Description>
        <h3>{title}</h3>
        <p>{description === '' ? 'No description' : description}</p>
        <p>
          {address}
          {' '}
          -
          {' '}
          <span>{completeTime}</span>
        </p>
      </Description>
    </Card>
  );
};

export default BikeCard;
