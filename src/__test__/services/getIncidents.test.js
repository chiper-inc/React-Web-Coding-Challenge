import { callApi } from '../../services/getIncidents'

describe('Probar Async/Await', () => {
  test('Realizar una petición a una API', async () => {
    const urlParams =
      'page=1&per_page=10&query=bike&occurred_before=1598245200&occurred_after=1597726800'

    const data = await callApi(urlParams)

    expect(data.incidents.length).toBeGreaterThanOrEqual(0)
  })
})
