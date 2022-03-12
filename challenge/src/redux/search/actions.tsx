/* eslint-disable @typescript-eslint/no-explicit-any */
import * as SearchTypes from './types';
import { Dispatch } from 'redux';
import { searchBikes } from '../../services/search';

export const setSearchState = (index: string, value: any) => (dispatch: Dispatch) => {
  dispatch({
    type: SearchTypes.TYPE_SET_SEARCH_STATE,
    payload: { index, value },
  });
};

export const getSearchBikes = () => (dispatch: Dispatch<any>, getState: any) => {
  const page = getState().SearchReducer.page;
  dispatch(setSearchState('loading', true));
  searchBikes(page)
    .then((response) => {
      console.log('GET BIKES SUCCESS', response.headers);
      dispatch(setSearchState('bikes', response.data.bikes));
    })
    .catch((error) => {
      console.warn('GET BIKES ERROR', error);
    })
    .finally(() => {
      dispatch(setSearchState('loading', false));
    });
};
