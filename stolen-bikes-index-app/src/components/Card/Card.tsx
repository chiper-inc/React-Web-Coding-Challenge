import React from 'react';
import { SimpleStolenBikes } from '../../interfaces/SimpleStolenBikesInterface';
import './Card.css';

export default function Card({
  id, dateOfTheft, img, description, locationOfTheft, title,
}:SimpleStolenBikes) {
  return (
    <div>
      <img src={img || ''} alt="" />
      <span>{title}</span>
      <span>{description}</span>
      <span>{locationOfTheft}</span>
      <span>{dateOfTheft}</span>
      <span>{id}</span>
    </div>
  );
}
