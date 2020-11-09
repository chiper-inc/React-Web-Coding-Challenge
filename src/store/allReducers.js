import { combineReducers } from 'redux';
// Reducers
import  reducer  from './reducers/appReducer';

const allReducers = combineReducers({
    appBikeStole : reducer,
});

export default allReducers;
