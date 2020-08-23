import {
  REQUEST_DATA,
  ERROR_OCURRED,
  BIKES_RECEIVED,
  CHANGE_PAGE,
} from "./actions";

export const INITIAL_STATE = {
  loading: false,
  error: null,
  stolenBikes: [],
  page: 1,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ERROR_OCURRED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case BIKES_RECEIVED:
      return {
        ...state,
        loading: false,
        stolenBikes: action.payload,
      };
    case CHANGE_PAGE:
      return{
        ...state,
        page: action.payload
      }
    default:
      return state;
  }
};
