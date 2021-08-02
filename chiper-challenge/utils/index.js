export const timestampToDate = (strDate) => {
  const dateNum = new Date(strDate * 1000).toLocaleDateString('en-US')
  const time = new Date(strDate * 1000).toLocaleTimeString('en-US')
  return dateNum + ' - ' + time
}