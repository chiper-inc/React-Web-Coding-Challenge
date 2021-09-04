import { SimpleStolenBikes } from '../../interfaces/SimpleStolenBikesInterface';
import { Action, GET_STOLEN_BIKES } from '../actions';

export type State = {
  stolenBikes: SimpleStolenBikes[];
}

const InitialState: State = {
  stolenBikes: [],
};

export default function rootReducer(state:State = InitialState, action:Action):State {
  switch (action.type) {
    case GET_STOLEN_BIKES:
      return {
        ...state,
        stolenBikes: action.payload,
      };
    default: return state;
  }
}
