import axios from 'axios'

export const GET_CASES = 'GET_CASES'

const inmutable  = {
    per_page: 100,
    stolenness: 'proximity'
}

export function getCases(params) {
    params = { location: 'Berlin', distance: 10, ...params, ...inmutable }
    return (dispatch) => {
        return axios.get('https://bikeindex.org:443/api/v3/search', { params: params })
            .then(res => res.data)
            .then(res => {
                dispatch({ type: GET_CASES, payload: res.bikes })
            })
            .catch(e => console.error(e))
    }
}