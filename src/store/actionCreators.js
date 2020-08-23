import axios from 'axios'
import { searchInArrayOfObj } from '../utils/fuzzySearch'
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
const cast2QueryParams = (obj) =>
  Object.keys(obj)
    .filter((key) => obj[key])
    .map((key) => `${key}=${obj[key]}`)
    .join('&')

export const requestStolenBikes = ({
  page = 1,
  perPage = 100,
  ...aditionalParams
}) => (dispatch) => {
  const queryParams = cast2QueryParams({
    ...aditionalParams,
    page,
    per_page: perPage,
    proximity: 'Berlin, DE',
    proximity_square: 100,
    incident_type: 'theft'
  })
  axios
    .get(`${URL}/incidents?${queryParams}`)
    .then((res) => {
      const {
        data: { incidents },
        status
      } = res
      const bikes = searchInArrayOfObj(incidents, ['title'], aditionalParams.query)
      dispatchDataReceived(dispatch, BIKES_RECEIVED, status, bikes)
    })
    .catch((e) => dispatchError(dispatch, e))

  dispatchReqData(dispatch)
}

export const requestPage = (page) => ({ type: CHANGE_PAGE, payload: page })
