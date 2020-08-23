import axios from 'axios'
import {
  REQUEST_DATA,
  ERROR_OCURRED,
  BIKES_RECEIVED,
  CHANGE_PAGE
} from './actions'

const URL = 'https://bikewise.org/api/v2'

const dispatchError = (dispatch, e = 'Ooops, something went wrong') =>
  dispatch({ type: ERROR_OCURRED, payload: e })

const dispatchReqData = (dispatch) => dispatch({ type: REQUEST_DATA })
const dispatchDataReceived = (dispatch, type, status, payload) => {
  if (status > 199 && status < 300) {
    dispatch({ type, payload })

    return
  }
  dispatchError(dispatch)
}

export const requestStolenBikes = (page, perPage) => (dispatch) => {
  axios
    .get(
      `${URL}/incidents?incident_type=theft&proximity=Berlin&proximity_square=100&page=${page}&per_page=${perPage}`
    )
    .then((res) => {
      const {
        data: { incidents },
        status
      } = res
      dispatchDataReceived(dispatch, BIKES_RECEIVED, status, incidents)
    })
    .catch((e) => dispatchError(dispatch, e))

  dispatchReqData(dispatch)
}

export const requestPage = (page) => ({ type: CHANGE_PAGE, payload: page })
