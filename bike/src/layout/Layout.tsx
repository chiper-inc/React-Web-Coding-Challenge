import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { LayoutContent } from './styles';

const Layout = () => (
  <LayoutContent>
    <Header />
    <Outlet />
  </LayoutContent>
);

export default Layout;
