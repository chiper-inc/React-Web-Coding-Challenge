import { Data} from './data';
import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
    combineReducers({
        data : Data,
        
    }),
    applyMiddleware(thunk, logger)
    ); 
    return store;
}