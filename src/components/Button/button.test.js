import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./index";

test('Render Button', () => {
  const component = render(<Button>Text Button</Button>);
  component.getByText('Text Button');
});

test('Click on Button', () => {
  const mockHandler = jest.fn();
  const component = render(<Button onClick={mockHandler}>Text Button</Button>);
  const button = component.getByText('Text Button');

  fireEvent.click(button);
  expect(mockHandler).toHaveBeenCalledTimes(1);
});

test('Disabled on Button', () => {
  const component = render(<Button disabled>Text Button</Button>);
  const button = component.getByText('Text Button');

  expect(button).toHaveAttribute('disabled')
});
