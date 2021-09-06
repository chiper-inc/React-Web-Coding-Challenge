import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";
import Header from './components/Header/Header';
import BikesCore from './components/BikesCore/BikesCore';
import BikeDetail from './components/BikeDetail/BikeDetail';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Header} />
        <Route exact path="/" component={BikesCore} />
        <Route exact path="/case/:id" component={BikeDetail} />
      </div>
    </Router>
  );
}

export default App;
