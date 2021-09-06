import { SimpleStolenBikes } from '../../interfaces/SimpleStolenBikesInterface';
import { Action, GET_STOLEN_BIKES, SET_ERROR } from '../actions';

export type State = {
  stolenBikes: SimpleStolenBikes[];
  error:boolean;
}

const InitialState: State = {
  stolenBikes: [],
  error: false,
};

export default function rootReducer(state:State = InitialState, action:Action):State {
  switch (action.type) {
    case GET_STOLEN_BIKES:
      return {
        ...state,
        stolenBikes: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
   
    default: return state;
  }
}
