import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Loading } from "./index";

test('Render Loading', () => {
  render(<Loading />);
});
