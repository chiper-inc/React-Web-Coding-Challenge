import React from 'react';
import { Logo } from '../../assets/images';
import './style.scss';
const Header = () => {
  return (
    <div className=" header flex">
      <div className="content-img">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="content-info flex flex-col justify-center ml-8">
        <h1 className="title text-4xl">Police Department of Berlin</h1>
        <h4 className="title text-2xl">Stolen bykes</h4>
      </div>
    </div>
  );
};

export default Header;
