import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Detail from '../pages/Detail/Detail';
import GlobalStyles from '../GlobalStyles';

const basename = process.env.NODE_ENV === 'development' ? '/' : '/React-Web-Coding-Challenge/';
const App = () => (
  <BrowserRouter basename={basename}>
    <GlobalStyles />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/detail/:id' component={Detail} />
    </Switch>
  </BrowserRouter>
);

export default App;
