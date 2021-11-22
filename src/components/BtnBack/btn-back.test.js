import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BtnBack } from "./index";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('Render BtnBack', () => {
  render(<BtnBack />);
});
