import { Byke } from "../../components/BykeList";
import { Action } from "../actions";
import ActionsTypes from "../actions/actiontypes";

export interface BykeReducer {
    data: Byke[],
    total?: number,
    error?: boolean,
    loading?: boolean,
    pageMax?: number
}

const initialState: BykeReducer = {
  data: [],
  total: 0,
  error: false,
  pageMax: 0
};

export function bykeReducer (state = initialState, action: Action): BykeReducer {
  const { type, payload } = action;

  switch (type) {
    case ActionsTypes.SET_BYKES:
      return {
        ...state,
        data: payload?.data,
        loading: false,
        total: payload?.total,
        pageMax: Math.ceil(payload?.total / 10)
      };
    case ActionsTypes.FETCH_BYKES:
      return {
        ...state,
        loading: true,
        total: 0
      };
    case ActionsTypes.GET_BYKES_FAILED:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
}

export default bykeReducer;
