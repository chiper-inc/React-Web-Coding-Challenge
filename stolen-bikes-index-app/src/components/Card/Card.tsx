import React from 'react';
import { SimpleStolenBikes } from '../../interfaces/SimpleStolenBikesInterface';
import './Card.css';

interface Props {
  bike: SimpleStolenBikes
}

export default function Card({ bike }:Props) {
  return (
    <div>
      <img src={bike.img || ''} alt="" />
      <span>{bike.title}</span>
      <span>{bike.description}</span>
      <span>{bike.locationOfTheft}</span>
      <span>{bike.dateOfTheft}</span>
      <span>{bike.id}</span>
    </div>
  );
}
