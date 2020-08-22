import React from 'react';
import { Layout, H1, P } from './styles';
import GlobalStyles from '../GlobalStyles';
import ListOfCards from '../components/ListOfBikes/ListOfCards';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <H1>Police Departmen of Berlin</H1>
        <P>Stolen Bikes</P>
        <ListOfCards />
      </Layout>
    </>
  );
};

export default App;
