import React from 'react';
import { Link } from 'react-router-dom';
import { SimpleStolenBikes } from '../../interfaces/SimpleStolenBikesInterface';
import './Card.css';

interface Props {
  bike: SimpleStolenBikes
}

export default function Card({ bike }:Props) {
  return (
    <div>
      <Link to={`/bike/${bike.id}`}>
        <img src={bike.img || ''} alt="" />
        <span>{bike.title}</span>
        <span>{bike.description}</span>
        <span>{bike.locationOfTheft}</span>
        <span>{bike.dateOfTheft}</span>
      </Link>
    </div>
  );
}
