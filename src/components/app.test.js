import React from 'react';
import ReactDOM from "react-dom";
import App from './app';

it("renders App component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});