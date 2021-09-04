import React from "react";
import "./sass/app/app.scss";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/home/home.js";
import Scroll from "./components/scroll/scroll";
import PageNotFound from "./components/pagenotfound/pagenotfound.js";
const App = () => {
  return (
    <BrowserRouter>
      <Scroll />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
