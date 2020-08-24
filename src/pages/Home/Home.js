import React from 'react';
import ListOfCards from '../../components/ListOfBikes/ListOfCards';
import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <>
      <main>
        <Header />
        <ListOfCards />
      </main>
    </>
  );
};

export default Home;
