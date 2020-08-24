import { getAllBikes } from '../api/callsApiMock'

export const homePropsMock = {
  loading: false,
  error: null,
  stolenBike: getAllBikes(),
  page: 1,
  actions: {
    requestStolenBikes: () => console.log('reques'),
    requestPage: () => console.log('request!')
  }
}
