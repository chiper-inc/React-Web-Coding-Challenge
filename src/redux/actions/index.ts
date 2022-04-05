import ActionsTypes from "./actiontypes";

export interface Action {
    type: ActionsTypes,
    payload?: any
}

export const setBykes = (payload: any): Action => ({
  type: ActionsTypes.SET_BYKES,
  payload
});

export const fetchBykes = (payload?: any): Action => ({
  type: ActionsTypes.FETCH_BYKES,
  payload
});

export const getBykesFailed = (payload?: any): Action => ({
  type: ActionsTypes.GET_BYKES_FAILED,
  payload
});
