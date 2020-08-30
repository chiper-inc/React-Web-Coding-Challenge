import React from "react";
import ReactDOM from "react-dom";
import IncidentsList from "./incidents_list";

it("renders IncidentsList component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<IncidentsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
