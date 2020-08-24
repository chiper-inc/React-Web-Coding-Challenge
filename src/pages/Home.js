import React from 'react';
import { Layout, H1, P } from './styles';
import GlobalStyles from '../GlobalStyles';
import ListOfCards from '../components/ListOfBikes/ListOfCards';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <a href='/'>
          <H1>Police Department of Berlin</H1>
        </a>
        <P>Stolen Bikes</P>
        <ListOfCards />
      </Layout>
    </>
  );
};

export default App;
