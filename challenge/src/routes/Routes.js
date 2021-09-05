import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Details from "../pages/Details";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details/:serial" exact component={Details} />
          <Route>
            <h2>404 not found</h2>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default Routes;
