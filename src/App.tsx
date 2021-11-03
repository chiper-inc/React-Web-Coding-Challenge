// import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header } from './components';
import { Home } from './views';

function App() {
  return (
    <div className="container mx-auto px-4 mt-8">
      <Header />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
