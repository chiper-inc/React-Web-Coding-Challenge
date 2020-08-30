import React from "react";
import ReactDOM from "react-dom";
import Paginator from "./paginator";

it("renders Paginator component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Paginator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
