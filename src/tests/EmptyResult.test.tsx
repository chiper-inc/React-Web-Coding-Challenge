import React from 'react';
import { shallow } from 'enzyme';
import EmptyResult from '../components/EmptyResult';
test('renders the component EmptyResult', () => {
  const component = shallow(<EmptyResult />);
  expect(component).toMatchSnapshot();
});
