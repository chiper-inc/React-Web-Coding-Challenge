import { render, screen } from "@testing-library/react";
import Navbar from "./components/layout/navbar/Navbar";

test("renders about title", () => {
  render(<Navbar />);
  expect(screen.getAllByText("Police Departament of Berlin")).toHaveLength(1);
});
