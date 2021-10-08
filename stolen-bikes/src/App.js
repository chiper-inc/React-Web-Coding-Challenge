import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themeConfig';
import Header from './components/Header/Header';
import Bikes from './components/Bikes/Bikes';
import Details from './components/Details/Details';

function App() {
  const [details, setDetails] = useState(false);
  const handleDetails = () => setDetails(!details);
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {!details ? (
        <Bikes handleDetails={handleDetails} />
      ) : (
        <Details handleDetails={handleDetails} />
      )}
    </ThemeProvider>
  );
}

export default App;
