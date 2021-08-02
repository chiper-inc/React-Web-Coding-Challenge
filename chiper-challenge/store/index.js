import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import generalReducer from '../reducer'
import thunk from 'redux-thunk'

const store = createStore(generalReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store