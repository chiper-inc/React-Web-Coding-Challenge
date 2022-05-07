import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import StolenBike from './pages/StolenBike';
import StolenBikeDetail from './pages/StolenBikeDetail';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<StolenBike />} />
        <Route path="/detail" element={<StolenBikeDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
