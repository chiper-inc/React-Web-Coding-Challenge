import React from 'react';
import { shallow } from 'enzyme';
import BikeItem from '../components/BikeItem';
import BikesServices from '../utils/services/BikesServices';

test('Checking that the index returns 10 items per page', async () => {
  const bikesResponse = await BikesServices.index(1);
  await expect(bikesResponse.bikes.length).toEqual(10);
});

test('Checking that the title of the consulted case exists', async () => {
  const bikesResponse = await BikesServices.searchForTitle('surly');
  await expect(bikesResponse.manufacturer).toEqual('surly');
});
