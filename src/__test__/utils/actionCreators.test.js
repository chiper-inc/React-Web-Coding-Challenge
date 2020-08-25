/* eslint-disable no-undef */
import { configureStoreMock } from '../../__mocks__/configureStoreMock'
import {
  dispatchError,
  dispatchReqData,
  dispatchDataReceived
} from '../../store/actionCreators'
import { BIKES_RECEIVED, GEOJSON_BIKES_RECEIVED } from '../../store/actions'
import { getBikes, getAllMarkersBikes } from '../../__mocks__/api/callsApiMock'

const mockStore = configureStoreMock()

describe('ActionCreators[dispatchError]', () => {
  test('checking dispatchError', () => {
    const expectedValue = 'Testing error'
    dispatchError(mockStore.dispatch, expectedValue)
    const { error, loading } = mockStore.getState()
    expect(error).toEqual(expectedValue)
    expect(loading).toEqual(false)
  })
})

describe('ActionCreators[dispatchReqData] action', () => {
  test('checking dispatchReqData', () => {
    dispatchReqData(mockStore.dispatch)
    const { loading, error } = mockStore.getState()
    expect(loading).toEqual(true)
    expect(error).toEqual(null)
  })
})

describe('ActionCreators[dispatchDataReceived]', () => {
  test('checking dispatchDataReceived 200 action[BIKES_RECEIVED]', () => {
    const payload = getBikes(0, 10)
    dispatchDataReceived(mockStore.dispatch, BIKES_RECEIVED, 200, payload)
    const { loading, stolenBikes } = mockStore.getState()
    expect(loading).toEqual(false)
    expect(stolenBikes.length).toEqual(10)
  })

  test('checking dispatchDataReceived 400 action[BIKES_RECEIVED]', () => {
    const payload = null
    dispatchDataReceived(mockStore.dispatch, BIKES_RECEIVED, 400, payload)
    const { loading, error, stolenBikes } = mockStore.getState()

    expect(typeof stolenBikes).toEqual(typeof [])
    expect(loading).toEqual(false)
    expect(typeof error).toEqual(typeof '')
  })

  test('checking dispatchDataReceived 200 action[GEOJSON_BIKES_RECEIVED]', () => {
    const payload = getAllMarkersBikes()
    dispatchDataReceived(
      mockStore.dispatch,
      GEOJSON_BIKES_RECEIVED,
      200,
      payload
    )
    const { loading, geoJsonStolenBikes } = mockStore.getState()
    expect(loading).toEqual(false)
    expect(typeof geoJsonStolenBikes).toEqual(typeof {})
  })

  test('checking dispatchDataReceived 400 action[GEOJSON_BIKES_RECEIVED]', () => {
    const payload = null
    dispatchDataReceived(
      mockStore.dispatch,
      GEOJSON_BIKES_RECEIVED,
      400,
      payload
    )
    const { loading, error, geoJsonStolenBikes } = mockStore.getState()

    expect(typeof geoJsonStolenBikes).toEqual(typeof {})
    expect(loading).toEqual(false)
    expect(typeof error).toEqual(typeof '')
  })
})
