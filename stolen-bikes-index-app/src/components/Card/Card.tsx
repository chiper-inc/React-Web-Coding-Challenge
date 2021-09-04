import React from 'react';
import { SimpleStolenBikes } from '../../interfaces/SimpleStolenBikesInterface';
import './Card.css';

export default function Card({ title, description, img } :SimpleStolenBikes) {
  return (
    <div>
      <img src={img || ''} alt="" />
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
}
