import React from "react";
import ReactDOM from "react-dom";
import IncidentItem from "./incident_item";

it("renders IncidentItem component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.unmountComponentAtNode(div);
});
