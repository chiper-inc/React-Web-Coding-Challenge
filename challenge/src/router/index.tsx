import { Routes, Route } from 'react-router-dom';
import * as Routing from './routing';
import Login from '../screens/login';
import Dashboard from './dashboard';
import NotFound from '../screens/404';

const Router = () => {
  return (
    <Routes>
      <Route path={Routing.LoginRoute} element={<Login />} />
      <Route path={Routing.Dashboard} element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
