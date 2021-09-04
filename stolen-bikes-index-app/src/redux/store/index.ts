import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index';

const reducer = (combineReducers({
  rootReducer,
}));

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
