import { paramsToString } from '../../utils/paramsToString'

describe('paramsToString', () => {
  test('paramsToString query params', () => {
    const params = [
      {
        key: 'page',
        value: 1,
      },
      {
        key: 'per_page',
        value: 10,
      },
      {
        key: 'query',
        value: 'bike',
      },
      {
        key: 'occurred_before',
        value: 1598245200,
      },
      {
        key: 'occurred_after',
        value: 1597726800,
      },
    ]

    expect(paramsToString(params)).toEqual(
      'page=1&per_page=10&query=bike&occurred_before=1598245200&occurred_after=1597726800'
    )
  })
})
