import React from 'react';
import { shallow } from 'enzyme';
import Home from '../views/home';
test('renders the component Home View', () => {
  const component = shallow(<Home />);
  expect(component).toMatchSnapshot();
});
