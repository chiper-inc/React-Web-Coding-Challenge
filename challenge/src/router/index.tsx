import { Routes, Route } from 'react-router-dom';
import * as Routing from './routing';
import Home from '../screens/home';

const Router = () => {
  return (
    <Routes>
      <Route path={Routing.HomeRoute} element={<Home />} />
    </Routes>
  );
};

export default Router;
