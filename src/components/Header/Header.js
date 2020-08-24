import React from 'react';
import { Link } from 'react-router-dom';
import { H1, P } from './styles';

const Header = () => {
  return (
    <>
      <Link to='/'>
        <H1>Police Department of Berlin</H1>
      </Link>
      <P>Stolen Bikes</P>
    </>
  );
};

export default Header;
