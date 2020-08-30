import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./search_bar";

it("renders SearchBar component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
