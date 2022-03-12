import { Routes, Route } from 'react-router-dom';
import * as Routing from './routing';
import Login from '../screens/login';
import Dashboard from './dashboard';

const Router = () => {
  return (
    <Routes>
      <Route path={Routing.LoginRoute} element={<Login />} />
      <Route path={Routing.Dashboard} element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
