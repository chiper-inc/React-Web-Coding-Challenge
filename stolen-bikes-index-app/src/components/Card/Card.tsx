import React from 'react';
import { BikeCard } from '../../interfaces/BikeCardInterface';
import './Card.css';

export default function Card({ title, description, img } :BikeCard) {
  return (
    <div>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
}
