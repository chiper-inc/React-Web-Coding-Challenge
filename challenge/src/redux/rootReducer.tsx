import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './index';

const composeEnhancers = compose;

export default function configureStore() {
  const middleware = process.env.__DEV__ ? [thunk, logger] : [thunk];
  const enhancers = [applyMiddleware(...middleware)];
  const initialState = {};

  const store = createStore(
    rootReducer,
    initialState,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    composeEnhancers(...enhancers),
  );

  return { store };
}
