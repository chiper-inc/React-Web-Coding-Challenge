import { GET_ALL, GET_BY_ID, GET_TOTAL, GET_ERROR } from '../actions/bikes';

const initialState = {
  bikes: [],
  bikeById: {},
  total: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return { ...state, bikes: action.payload, error: null };
    case GET_BY_ID:
      return { ...state, bikeById: action.payload, error: null };
    case GET_TOTAL:
      return { ...state, total: action.payload, error: null };
    case GET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
