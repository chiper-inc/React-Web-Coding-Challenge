import { combineReducers } from 'redux';
import { SearchReducer } from './search/reducer';

const reducer = combineReducers({
  SearchReducer,
});

export default reducer;
export type RootType = ReturnType<typeof reducer>;
