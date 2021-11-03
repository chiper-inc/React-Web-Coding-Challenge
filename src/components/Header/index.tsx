import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../assets/images';
import './style.scss';
const Header = () => {
  return (
    <div className="header">
      <div className="content-img">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="content-info">
        <Link className="title" to="/">
          Police Department of Berlin
        </Link>
        <h4 className="sub-title">Stolen bykes.</h4>
      </div>
    </div>
  );
};

export default Header;
