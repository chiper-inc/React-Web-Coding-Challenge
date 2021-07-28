import React from "react";
import { Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Filters from './components/Filters/Filters'

const App: React.FC = () => {
  return (
    <div className="App">
      <Route path='/' component={NavBar} />
      <Route path='/' component={Filters} />
      <h1>Hello World!</h1>
    </div>
  );
};

export default App;