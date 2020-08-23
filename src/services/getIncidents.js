import { API_URL } from './settings'
import { paramsToString } from '../utils/paramsToString'

async function callApi(urlParams, options = {}) {
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  const url = `${API_URL}?${urlParams}`
  const response = await fetch(url, options)
  const data = await response.json()
  return data
}

export const getIncidents = async ({
  page = 1,
  per_page = 10,
  keyword = 10,
  occurred_before = '1698034949',
  occurred_after = '1598034943',
}) => {
  let urlParams = paramsToString([
    {
      key: 'page',
      value: page,
    },
    {
      key: 'per_page',
      value: per_page,
    },
    {
      key: 'query',
      value: keyword,
    },
    {
      key: 'occurred_before',
      value: occurred_before,
    },
    {
      key: 'occurred_after',
      value: occurred_after,
    },
  ])

  return callApi(urlParams)
}
