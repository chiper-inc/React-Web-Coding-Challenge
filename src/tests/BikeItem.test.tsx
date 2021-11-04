import React from 'react';
import { shallow } from 'enzyme';
import BikeItem from '../components/BikeItem';
import BikesServices from '../utils/services/BikesServices';

test('renders the component Bike', async () => {
  const bikesResponse = await BikesServices.index(1);
  const component = shallow(
    <BikeItem bike={bikesResponse} />
  );
  expect(component).toMatchSnapshot();
});
