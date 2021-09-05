import { SimpleStolenBikes } from '../../interfaces/SimpleStolenBikesInterface';
import { Action, CHANGE_PAGE, GET_STOLEN_BIKES } from '../actions';

export type State = {
  stolenBikes: SimpleStolenBikes[];
  actualPage: number
}

const InitialState: State = {
  stolenBikes: [],
  actualPage: 1,
};

export default function rootReducer(state:State = InitialState, action:Action):State {
  switch (action.type) {
    case GET_STOLEN_BIKES:
      return {
        ...state,
        stolenBikes: action.payload,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        actualPage: action.payload,
      };
    default: return state;
  }
}
