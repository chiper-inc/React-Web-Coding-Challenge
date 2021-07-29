import axios from 'axios'

export const GET_CASES = 'GET_CASES'

export const COUNT_CASES = 'COUNT_CASES'

const inmutable  = {
    per_page: 10,
    stolenness: 'proximity'
}

export function getCases(params) {
    params = { location: 'Berlin', distance: 10, ...params, ...inmutable }
    return (dispatch) => {
        return axios.get('https://bikeindex.org:443/api/v3/search', { params: params })
            .then(res => res.data)
            .then(res => {
                dispatch({ type: GET_CASES, payload: res })
            })
            .catch(e => console.error(e))
    }
}

export function countCases(params) {
    return (dispatch) => {
        return axios.get('https://bikeindex.org:443/api/v3/search', { params: params })
            .then(res => res.data)
            .then(res => {
                dispatch({ type: COUNT_CASES, payload: res })
            })
            .catch(e => console.error(e))
    }
}