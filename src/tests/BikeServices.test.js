import React from 'react';
import { shallow } from 'enzyme';
import BikeItem from '../components/BikeItem';
import BikesServices from '../utils/services/BikesServices';

jest.setTimeout(60000);
test('Checking that the index returns 10 items per page', async () => {
  const bikesResponse = await BikesServices.index(1);
  expect(bikesResponse.bikes.length).toEqual(10);
});

test('Checking that the title of the consulted case exists', async () => {
  const bikesResponse = await BikesServices.searchForTitle('Surly');
  // console.log(bikesResponse);
  expect(bikesResponse.bikes[0].manufacturer_name).toBe('Surly');
});

test('Checking that the year 2017 of the consulted case exists', async () => {
  const bikesResponse = await BikesServices.searchForTitle('Surly');
  const data = bikesResponse.bikes;
  const filter = data.filter((item) => item.year === 2017);
  // console.log(filter);
  expect(filter[0].year).toBe(2017);
});

test('Checking that the length of the array is less than or equal to 0 because the title test does not exist', async () => {
  const bikesResponse = await BikesServices.searchForTitle('Test');
  // console.log(bikesResponse);
  expect(bikesResponse.bikes.length).toBeLessThanOrEqual(0);
});
