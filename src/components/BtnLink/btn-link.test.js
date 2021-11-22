import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { BtnLink } from "./index";

test('Render BtnLink', () => {
  render(
    <MemoryRouter>
      <BtnLink to="/" text="Text BtnLink" />
    </MemoryRouter>
  );
});

test('Click on BtnLink', () => {
  const component = render(
    <MemoryRouter>
      <BtnLink to="/" text="Text BtnLink" />
    </MemoryRouter>
  );

  const button = component.getByText('Text BtnLink');
  fireEvent.click(button);
});
