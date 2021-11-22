import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Title } from "./index";

test('Render title', () => {
  const text = "Title to print";
  const component = render(<Title text={text} />);
  component.getByText(text);
});
