import { getAllMarkersBikes } from '../api/callsApiMock'

export const mapPropsMock = {
  loading: false,
  error: null,
  geoJsonStolenBikes: getAllMarkersBikes(),
  actions: {
    requestGeoJsonStolenBikes: () => console.log('Request elements')
  }
}
