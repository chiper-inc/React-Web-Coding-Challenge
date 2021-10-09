import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themeConfig';
import Header from './components/Header/Header';
import Bikes from './components/Bikes/Bikes';
import Details from './components/Details/Details';
import { getBikes, getBikeById, getTotalStolen } from './actions/bikes';

function App() {
  // Manages when component Details renders
  const [details, setDetails] = useState(false);
  const [bikeId, setBikeId] = useState(null);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const handleDetails = () => setDetails(!details);
  const handleBikeId = (id) => setBikeId(id);
  const handlePage = (event, value) => setPage(value);
  // Gets array of bikes when site renders
  useEffect(() => {
    dispatch(getBikes(page));
  }, [page]);
  // Gets bike by id when bikeId has value
  useEffect(() => {
    if (bikeId) {
      dispatch(getBikeById(bikeId));
    }
  }, [bikeId]);
  // Gets total amount of stolen bikes
  useEffect(() => {
    dispatch(getTotalStolen());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {!details ? (
        <Bikes
          handleDetails={handleDetails}
          handleBikeId={handleBikeId}
          handlePage={handlePage}
          page={page}
        />
      ) : (
        <Details handleDetails={handleDetails} />
      )}
    </ThemeProvider>
  );
}

export default App;
