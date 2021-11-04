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
        <a className="title" href="/">
          Police Department of Berlin
        </a>
        <h4 className="sub-title">Stolen bykes.</h4>
      </div>
    </div>
  );
};

export default Header;
