import { Incidents} from './incidents';
import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialQuery } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
    combineReducers({
        incidents : Incidents,
        ...createForms({
            query: InitialQuery
        })
        
    }),
    applyMiddleware(thunk, logger)
    ); 
    return store;
}