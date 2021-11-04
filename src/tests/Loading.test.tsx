import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../components/Loading';
test('renders the component Loading', () => {
  const component = shallow(<Loading />);
  expect(component).toMatchSnapshot();
});
