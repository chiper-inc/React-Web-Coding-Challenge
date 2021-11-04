import React from 'react';
import { shallow } from 'enzyme';
import BarFilter from '../components/BarFilter';

test('renders the component BarFilter Test', () => {
  const setTitleSearch = jest.fn();

  const component = shallow(
    <BarFilter titleSearch="" setTitleSearch={() => setTitleSearch()} />
  );
  expect(component).toMatchSnapshot();
});
