import React from 'react';
import { Card, Description } from './styles';

const BikeCard = (data) => {
  const { title, description, occurred_at, address, media } = data;
  const { image_url } = media;
  console.log(title);
  return (
    <Card>
      <img src={image_url} alt='Bike' />
      <Description>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          {address}
          {' '}
          -
          {' '}
          <span>{occurred_at}</span>
        </p>
      </Description>
    </Card>
  );
};

export default BikeCard;
