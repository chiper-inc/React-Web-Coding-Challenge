import { shallow } from 'enzyme';
import Header from '../components/Header';

const component = shallow(<Header />);
test('renders the component Header Mpount', () => {
  expect(component).toMatchSnapshot();
});

test('should have the logo image', () => {
  const img = component.find('img');
  //@ts-ignore
  const src = img.getElement().props.src;
  expect(src).toBe('logo.jpg');
});

test('should have the element h4', () => {
  const h4 = component.find('h4');
  //@ts-ignore
  const className = h4.getElement().props.className;
  expect(className).toBe('sub-title');
});
