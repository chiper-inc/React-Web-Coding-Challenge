import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BikeItem } from "./index";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('Render BikeItem', () => {
  const info = {
    id: 1,
    thumb: 'https://www.w3schools.com/html/img_chania.jpg',
    title: 'title',
    description: 'description',
    date_stolen: 1637578800,
    stolen_location: 'LA, California.'
  }

  const component = render(<BikeItem {...info} />);
  component.getAllByText(/Description/i);
});
