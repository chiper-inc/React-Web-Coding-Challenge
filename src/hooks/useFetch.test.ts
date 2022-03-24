import { renderHook } from '@testing-library/react-hooks';
import useFetch from "./useFetch";

import mockAxios from "jest-mock-axios";
jest.mock("axios");
const data: any = {};
describe('UseFetch test', () => {
  afterEach(() => {
    mockAxios.reset();
  });
  test('should have data', () => {
    mockAxios.get.mockResolvedValueOnce(data);
    // @ts-ignore
    const result: any = renderHook(() => useFetch(process.env.REACT_APP_API_URL || '')).result;

    expect(result.current.data).toEqual(data);
  });
});
