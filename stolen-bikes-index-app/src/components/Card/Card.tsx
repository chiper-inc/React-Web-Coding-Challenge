import React from 'react';
import { Link } from 'react-router-dom';
import { SimpleStolenBikes } from '../../interfaces/SimpleStolenBikesInterface';
import './Card.css';
import noImg from '../../assets/no-img.jpg';

interface Props {
  bike: SimpleStolenBikes
}

export default function Card({ bike }:Props) {
  return (
    <div className="cardCtn">
      <img src={bike.img || noImg} alt="" />

      <div className="cardInfo">
        <Link to={`/bike/${bike.id}`}>
          <span className="cardTitle">{bike.title}</span>
        </Link>

        <span>{bike.description}</span>

        <div>
          <span className="cardText">{bike.locationOfTheft}</span>
          <span className="cardText">{bike.dateOfTheft.toDateString()}</span>
        </div>
      </div>
    </div>
  );
}
