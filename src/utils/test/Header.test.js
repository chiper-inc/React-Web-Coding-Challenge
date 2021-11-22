import { render } from "@testing-library/react";
import Header from "../../components/Header";

describe("App component", () => {
  test("it renders", () => {

    render(<Header />);
  });
});