import bikes from '../redux/reducer';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(bikes, composeEnhancers(applyMiddleware(thunk)));

export default store;
