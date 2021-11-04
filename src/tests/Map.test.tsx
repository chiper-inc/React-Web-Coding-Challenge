import React from 'react';
import { shallow } from 'enzyme';
import Map from '../components/Map';

test('renders the component Map', () => {
  const component = shallow(
    <Map latitude={7854126} longitude={5414578} zoom={11} />
  );
  expect(component).toMatchSnapshot();
});
