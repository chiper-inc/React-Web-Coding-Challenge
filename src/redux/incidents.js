import * as ActionTypes from './ActionTypes';

export const Incidents = (state = { isLoading: true,
    errMess: null, incidents:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DATA:
            return {...state, isLoading: false, errMess: null, incidents: action.payload};

        case ActionTypes.DATA_LOADING:
            return {...state, isLoading: true, errMess: null}

        case ActionTypes.DATA_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};