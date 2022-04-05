import { Action, fetchBykes, getBykesFailed, setBykes } from "./index";
import ActionsTypes from "./actiontypes";

describe('call actions', () => {
  test('SetBykes action', () => {
    const payload: any[] = [];
    const expected: Action = { type: ActionsTypes.SET_BYKES, payload };
    expect(setBykes(payload)).toEqual(expected);
  });

  test('fetchBykes action', () => {
    const payload: any[] = [];
    const expected: Action = { type: ActionsTypes.FETCH_BYKES, payload };
    expect(fetchBykes(payload).type).toEqual(expected.type);
  });

  test('getBykesFailed action', () => {
    const payload: any[] = [];
    const expected: Action = { type: ActionsTypes.GET_BYKES_FAILED, payload };
    expect(getBykesFailed(payload)).toEqual(expected);
  });
});
