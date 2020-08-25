/* eslint-disable camelcase */
import axios from 'axios'
import { searchInArrayOfObj } from '../utils/fuzzySearch'
import {
  REQUEST_DATA,
  ERROR_OCURRED,
  BIKES_RECEIVED,
  CHANGE_PAGE,
  GEOJSON_BIKES_RECEIVED
} from './actions'
import { URL_API, DEF_PARAMS_SEARCH } from '../AppSettings'

const {
  proximity,
  proximity_square,
  incident_type,
  defPage,
  defperPage
} = DEF_PARAMS_SEARCH

export const dispatchError = (dispatch, e = 'Ooops, something went wrong') =>
  dispatch({ type: ERROR_OCURRED, payload: e })

export const dispatchReqData = (dispatch) => dispatch({ type: REQUEST_DATA })
export const dispatchDataReceived = (dispatch, type, status, payload) => {
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
  page = defPage,
  perPage = defperPage,
  ...aditionalParams
}) => (dispatch) => {
  const queryParams = cast2QueryParams({
    ...aditionalParams,
    page,
    per_page: perPage,
    proximity,
    proximity_square,
    incident_type
  })
  axios
    .get(`${URL_API}/incidents?${queryParams}`)
    .then((res) => {
      const {
        data: { incidents },
        status
      } = res
      const bikes = searchInArrayOfObj(
        incidents,
        ['title'],
        aditionalParams.query
      )
      dispatchDataReceived(dispatch, BIKES_RECEIVED, status, bikes)
    })
    .catch((e) => dispatchError(dispatch, e))

  dispatchReqData(dispatch)
}

export const requestPage = (page) => ({ type: CHANGE_PAGE, payload: page })

export const requestGeoJsonStolenBikes = (aditionalParams = {}) => (
  dispatch
) => {
  const queryParams = cast2QueryParams({
    proximity,
    proximity_square,
    incident_type,
    all: true,
    ...aditionalParams
  })

  axios
    .get(`${URL_API}/locations/markers?${queryParams}`)
    .then((res) => {
      const { data, status } = res
      dispatchDataReceived(dispatch, GEOJSON_BIKES_RECEIVED, status, data)
    })
    .catch((e) => dispatchError(dispatch, e))
}

export const requestGeoJsonByTitle = (title) => (dispatch) => {
  const queryParams = cast2QueryParams({
    proximity,
    proximity_square,
    incident_type,
    all: true,
    query: title,
    limit: 1
  })
  axios
    .get(`${URL_API}/locations/markers?${queryParams}`)
    .then((res) => {
      const { data, status } = res
      dispatchDataReceived(dispatch, GEOJSON_BIKES_RECEIVED, status, data)
    })
    .catch((e) => dispatchError(dispatch, e))
}
