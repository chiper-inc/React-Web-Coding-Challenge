import React from "react";
import "@testing-library/jest-dom/extend-expect";
// eslint-disable-next-line no-undef
import { screen, render } from "@testing-library/react";
import Home from "./home.js";
import "intersection-observer";

// eslint-disable-next-line no-undef
beforeEach(() => render(<Home />));

// eslint-disable-next-line no-undef
describe("Home", () => {
  // eslint-disable-next-line no-undef
  it("must display a title", () => {
    // eslint-disable-next-line no-undef
    expect(
      screen.queryByText(/Welcome to stolen Berlin bicycles/i)
    ).toBeInTheDocument();
  });
  // eslint-disable-next-line no-undef
  it("Not must display this title", () => {
    // eslint-disable-next-line no-undef
    expect(
      screen.queryByText(/Similar Cases, you can select one of these cases/i)
    ).toBeNull();
  });
});
