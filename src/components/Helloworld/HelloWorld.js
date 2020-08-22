import React from 'react';
import { Hello } from './styles';
import GlobalStyles from '../../GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Hello>
        Hola mundo
      </Hello>
    </>
  );
};

export default App;
