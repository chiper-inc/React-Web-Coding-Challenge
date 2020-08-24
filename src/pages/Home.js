import React from 'react';
import { Link } from 'react-router-dom';
import { Container, H1, P } from './styles';
import GlobalStyles from '../GlobalStyles';
import ListOfCards from '../components/ListOfBikes/ListOfCards';

const Home = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Link to='/'>
          <H1>Police Department of Berlin</H1>
        </Link>
        <P>Stolen Bikes</P>
        <ListOfCards />
      </Container>
    </>
  );
};

export default Home;
