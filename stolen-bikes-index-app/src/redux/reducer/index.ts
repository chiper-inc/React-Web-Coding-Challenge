import { SimpleStolenBikes } from '../../interfaces/SimpleStolenBikesInterface';
import { Action } from '../actions';

export type State = {
  stolenBikes: SimpleStolenBikes[];
}

const InitialState: State = {
  stolenBikes: [],
};

export default function rootReducer(state:State = InitialState, action:Action) {
  switch (action.type) {
    default: return state.stolenBikes;
  }
}
