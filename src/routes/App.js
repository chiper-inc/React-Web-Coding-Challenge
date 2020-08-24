import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
