export function paramsToString (params) {
  params = params.filter((item) => {
    return (
      typeof item.value !== 'undefined' &&
      item.value !== null &&
      item.value !== ''
    )
  })
  return params.map((param) => param.key + '=' + param.value).join('&')
}
