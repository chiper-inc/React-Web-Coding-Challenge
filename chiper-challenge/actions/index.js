import axios from 'axios'

export const GET_CASES = 'GET_CASES'
export const ERROR = 'ERROR'
export const GET_CASE_DETAILS = 'GET_CASE_DETAILS'

const inmutable = {
  per_page: 100,
  stolenness: 'proximity'
}

export function getCases (params) {
  params = { location: 'Berlin', distance: 10, ...params, ...inmutable }
  return (dispatch) => {
    return axios.get('https://bikeindex.org:443/api/v3/search', { params: params })
      .then(res => res.data)
      .then(res => {
        dispatch({ type: GET_CASES, payload: res.bikes })
      })
      .catch(e => {
        const status = e.response.status
        switch (status) {
          case 400:
            dispatch({ type: ERROR, payload: `Error ${status}: Bad request.` })
            break
          case 404:
            dispatch({ type: ERROR, payload: `Error ${status}: Page not found.` })
            break
          case 500:
            dispatch({ type: ERROR, payload: `Error ${status}: Internal server error.` })
            break
          case 502:
            dispatch({ type: ERROR, payload: `Error ${status}: Bad gateway.` })
            break
          case 503:
            dispatch({ type: ERROR, payload: `Error ${status}: Service unavailable.` })
            break
          case 504:
            dispatch({ type: ERROR, payload: `Error ${status}: Gateway timeout.` })
            break
          default:
            dispatch({ type: ERROR, payload: 'Something went wrong.' })
        }
      })
  }
}

export function getCaseDetails (id) {
  return (dispatch) => {
    return axios.get('https://bikeindex.org:443/api/v3/bikes/' + id)
      .then(res => res.data)
      .then(res => {
        dispatch({ type: GET_CASE_DETAILS, payload: res.bike })
      })
      .catch(e => console.log(e))
  }
}