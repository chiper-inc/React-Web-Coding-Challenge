import { compose, applyMiddleware, createStore } from 'redux'
import { INITIAL_STATE, reducer } from '../store/reducer'
import thunk from 'redux-thunk'

const middleware = [thunk]

export const configureStoreMock = () => createStore(
  reducer,
  INITIAL_STATE,
  compose(applyMiddleware(...middleware))
)
