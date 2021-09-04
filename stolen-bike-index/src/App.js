import React from "react";
import { Route } from "react-router";
import "./App.css";
import { Footer, Navbar } from "./components/layout";
import { Home } from "./components/views";

function App() {
  return (
    // <div className="App">
    // </div>
    <React.Fragment>
      <div className="noFooter">
        <Route path="/" component={Navbar} />
        <Route path="/" component={Home} />
      </div>
      <Route path="/" component={Footer} />
    </React.Fragment>
  );
}

export default App;
