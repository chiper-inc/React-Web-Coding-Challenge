import { takeEvery } from 'redux-saga/effects';
import bykeSaga, { fetchBykes } from "./bykeSga";
import ActionsTypes from "../actions/actiontypes";
describe('fetch bykes', () => {
  const genObject = bykeSaga();

  test('should wait for every FETCH_BYKES action and call fetchBykes', () => {
    expect(genObject.next().value)
      .toEqual(takeEvery(ActionsTypes.FETCH_BYKES, fetchBykes));
  });

  test('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
