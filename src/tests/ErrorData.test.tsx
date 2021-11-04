import React from 'react';
import { shallow } from 'enzyme';
import ErrorData from '../components/Error';
test('renders the component ErrorData', () => {
  const component = shallow(<ErrorData />);
  expect(component).toMatchSnapshot();
});

