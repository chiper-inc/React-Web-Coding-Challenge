import React from 'react';
import { Layout } from './styles';
import GlobalStyles from '../GlobalStyles';
import ListOfCards from '../components/ListOfBikes/ListOfCards';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <h1>Police Departmen of Berlin</h1>
        <p>Stolen Bikes</p>
        <ListOfCards />
      </Layout>
    </>
  );
};

export default App;
