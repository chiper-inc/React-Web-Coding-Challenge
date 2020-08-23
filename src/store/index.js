import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { INITIAL_STATE, reducer } from './reducer'

export const configureStore = (initialState = INITIAL_STATE) => {
  const middleware = [thunk]
  const rootReducer = reducer
  const enhancers = [
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ]

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  )
}
