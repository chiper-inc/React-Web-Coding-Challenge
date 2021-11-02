import React from 'react';
import { Logo } from '../../assets/images';
import './style.scss';
const Header = () => {
  return (
    <div className="header">
      <div className="content-img">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="content-info">
        <h1 className="title">Police Department of Berlin</h1>
        <h4 className="sub-title">Stolen bykes.</h4>
      </div>
    </div>
  );
};

export default Header;
