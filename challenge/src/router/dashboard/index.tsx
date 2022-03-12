import { Route, Routes } from 'react-router-dom';
import * as Routing from '../routing';
import Home from '../../screens/home';
import { Container } from 'react-bootstrap';
import assets from '../../assets/images';

const Dashboard = () => {
  return (
    <Container>
      <div className="header-bikes">
        <div>
          <img alt="bike logo" src={assets.bike} className="bike-logo-nav" />
        </div>
        <div>
          <h1>Berlin's police department</h1>
          <p>Stolen bikes</p>
        </div>
      </div>
      <Routes>
        <Route path={Routing.HomeRoute} element={<Home />} />
      </Routes>
    </Container>
  );
};

export default Dashboard;
