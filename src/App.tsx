// import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components';
import { Details, Home } from './views';

function App() {
  return (
    <div className="container mx-auto px-4 mt-8">
      <Header />
      <Router>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
