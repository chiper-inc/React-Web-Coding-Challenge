import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import GlobalStyles from '../GlobalStyles';

const basename = process.env.NODE_ENV === 'development' ? '/' : '/React-Web-Coding-Challenge/';
const App = () => (
  <BrowserRouter basename={basename}>
    <GlobalStyles />
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
