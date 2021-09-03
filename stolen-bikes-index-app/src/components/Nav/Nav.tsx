import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/Berliner_Polizei.svg.png';

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
}
