import React from "react";
import { render } from 'react-testing-library'
import App from "../../pages/App";

test("<App />", async () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot()
});
