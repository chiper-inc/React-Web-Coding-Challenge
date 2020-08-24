import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';

const basename = process.env.NODE_ENV === 'development' ? '/' : '/React-Web-Coding-Challenge/';
const App = () => (
  <BrowserRouter basename={basename}>
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
