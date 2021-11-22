import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import HomeView from "./index";

test('Render HomeView', () => {
  render(
    <MemoryRouter>
      <HomeView />
    </MemoryRouter>
  );
});
