import { combineReducers } from 'redux';
import bykeReducer from "./bykes";

const rootReducer = combineReducers({
  bykes: bykeReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
