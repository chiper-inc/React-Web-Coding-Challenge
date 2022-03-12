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

export const getSearchBikes = () => (dispatch: Dispatch<any>) => {
  searchBikes()
    .then((response) => {
      console.log('GET BIKES SUCCESS', response);
      dispatch(setSearchState('bikes', response.data.bikes));
    })
    .catch((error) => {
      console.warn('GET BIKES ERROR', error);
    });
};
