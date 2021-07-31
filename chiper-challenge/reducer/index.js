import { GET_CASES, ERROR } from '../actions'

const initialState = {
  cases: [],
  error: ''
}

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CASES: {
      return {
        ...state,
        cases: action.payload
      }
    }
    case ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }
    default:
      return {
        ...state
      }
  }
}

export default generalReducer