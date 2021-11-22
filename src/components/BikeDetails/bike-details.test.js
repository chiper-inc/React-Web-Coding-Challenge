import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BikeDetails } from "./index";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('Render BikeDetails', () => {
  const info = {
    id: 1,
    thumb: 'https://www.w3schools.com/html/img_chania.jpg',
    title: 'title',
    description: 'description',
    date_stolen: 1637578800,
    stolen_location: 'LA, California.',
    frame_colors: ['black', 'blue'],
    frame_material_slug: 'Metal',
    frame_model: 'Mustang',
    frame_size: 'L',
    manufacturer_name: 'Ford',
    serial: '1234567890',
    type_of_cycle: 'bike',
    year: 2021
  }

  const component = render(<BikeDetails info={info} />);
  component.getByText(/Description of incident/i);
});
