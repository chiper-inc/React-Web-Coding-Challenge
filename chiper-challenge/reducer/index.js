import { GET_CASES, ERROR, GET_CASE_DETAILS } from '../actions'

const initialState = {
  cases: [],
  error: '',
  caseDetails: {},
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
    case GET_CASE_DETAILS: {
      return {
        ...state,
        caseDetails: action.payload
      }
    }
    default:
      return {
        ...state
      }
  }
}

export default generalReducer