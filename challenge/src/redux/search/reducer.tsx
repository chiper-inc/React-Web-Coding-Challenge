/* eslint-disable @typescript-eslint/default-param-last, @typescript-eslint/no-explicit-any */
import * as SearchTypes from './types';

export interface BikeInterface {
  date_stolen: null | number;
  description: null | string;
  external_id: null | string | number;
  frame_colors: [string]
  frame_model: null | any;
  id: number;
  is_stock_img: boolean;
  large_img: null | string;
  location_found: null
  manufacturer_name: null | string;
  registry_name: null | string;
  registry_url: null | string;
  serial: null | string;
  status: null | string;
  stolen: boolean;
  stolen_coordinates: null | string;
  stolen_location: null | string;
  thumb: null | string;
  title: null | string;
  url: null | string;
  year: null | string;
}

export interface InitialSearchStateInterface {
  bikes: [] | BikeInterface[];
  loading: boolean;
  total: number;
  page: number;
}

const initialState: InitialSearchStateInterface = {
  bikes: [],
  loading: false,
  total: 108570,
  page: 1,
};

interface PayloadPropInterface {
  index: string;
  value: any;
}

interface ActionProp {
  type: string;
  payload: PayloadPropInterface;
}

export const SearchReducer = (state = initialState, action: ActionProp) => {
  switch (action.type) {
    case SearchTypes.TYPE_SET_SEARCH_STATE:
      return {
        ...state,
        [action.payload.index]: action.payload.value,
      };
    case SearchTypes.TYPE_RESET_SEARCH_STATE:
      return initialState;
    default:
      break;
  }
  return state;
};
