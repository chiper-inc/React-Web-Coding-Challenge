import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NoFound from "../components/nofound/NoFound";
import Details from "../pages/Details";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details/:id" exact component={Details} />
          <Route>
            <NoFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default Routes;
