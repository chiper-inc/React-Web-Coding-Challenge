import React from 'react';
import './header.scss';
import LogoMain from '../../assets/img/oso.png';

export const Header = ({}) => {
  return (
   <header>
       <div>
           <img src={LogoMain} ></img>
           <div>
            <h1> Police Departament of Berlin </h1>
            <div> Stolen bykes</div>
           </div>
       </div>
   </header>);
}
