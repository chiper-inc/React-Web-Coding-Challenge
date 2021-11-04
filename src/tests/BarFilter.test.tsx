import React from 'react';
import { shallow } from 'enzyme';
import BarFilter from '../components/BarFilter';

test('renders the component BarFilter Test', () => {
  const component = shallow(
    <BarFilter titleSearch="" setTitleSearch={() => console.log('')} />
  );
  expect(component).toMatchSnapshot();
});
