import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './allReducers'

export function configureStore() {
    return createStore(
        allReducers,
        composeWithDevTools()
    );
  }
  