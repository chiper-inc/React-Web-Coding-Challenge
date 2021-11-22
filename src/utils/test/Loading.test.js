import { render } from "@testing-library/react";
import Loading from "../../components/Loading";

describe("App component", () => {
  test("it renders", () => {

    render(<Loading />);
  });
});