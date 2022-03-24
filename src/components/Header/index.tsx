import React from 'react';
import { MainHeader } from './styles';
import logo from '../../assets/images/police-128.png';

function Header () {
  return (
        <MainHeader>
            <section>
                <img src={logo} alt=""/>
            </section>
            <section>
                <h1>Police Departament of Berlin</h1>
                <h3>Stolen bykes</h3>
            </section>
        </MainHeader>
  );
}

export { Header };
