import moment from 'moment'

const DEF_FORMAT = 'DD/MM/YYYY'

export const getDateFromUnix = (unixTime, format = DEF_FORMAT) =>
  moment.unix(unixTime).format(format)

export const addDays = (date, sourceFormat, days) => {
  const newDate = moment(date, sourceFormat)
  newDate.add(days, 'days')
  return newDate.format(sourceFormat)
}

export const castDateToUnix = (date, sourceFormat) => {
  return moment(date, sourceFormat).format('x') / 1000
}
