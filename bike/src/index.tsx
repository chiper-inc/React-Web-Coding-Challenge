import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import App from './App';
import DetailsBikePage from './pages/Details';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path=":bikeId" element={<DetailsBikePage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
