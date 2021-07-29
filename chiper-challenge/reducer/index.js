import { GET_CASES, COUNT_CASES } from '../actions'

const initialState = {
    cases: [],
    totalCases: 0,
}

const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CASES: {
            return {
                ...state,
                cases: action.payload
            }
        }
        case COUNT_CASES: {
            return {
                ...state,
                totalCases: action.payload.proximity
            }
        }
    }
}

export default generalReducer;