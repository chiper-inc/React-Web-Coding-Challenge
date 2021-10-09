import { fetchBikes, fetchBikeById, fetchTotalStolen } from '../api';

export const GET_ALL = 'GET_ALL';
export const GET_BY_ID = 'GET_BY_ID';
export const GET_TOTAL = 'GET_TOTAL';
export const GET_ERROR = 'GET_ERROR';

export const getBikes = (page) => async (dispatch) => {
  try {
    const { data } = await fetchBikes(page);
    dispatch({ type: GET_ALL, payload: data.bikes });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: error });
  }
};

export const getBikeById = (id) => async (dispatch) => {
  try {
    const { data } = await fetchBikeById(id);
    dispatch({ type: GET_BY_ID, payload: data.bike });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: error });
  }
};

export const getTotalStolen = () => async (dispatch) => {
  try {
    const { data } = await fetchTotalStolen();
    dispatch({ type: GET_TOTAL, payload: data.stolen });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: error });
  }
};
