/* eslint-disable no-unused-vars */
import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reducer = (combineReducers({
  rootReducer,
}));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
