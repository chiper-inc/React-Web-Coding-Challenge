import { useState } from 'react'
import moment from 'moment'

export const useSearchForm = () => {
  const [keyword, setkeyword] = useState('')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')

  const handleChangeKeyword = (evt) => {
    setkeyword(evt.target.value)
  }

  const handleChangeDateFrom = (evt) => {
    setDateFrom(moment(evt.target.value).unix())
  }

  const handleChangeDateTo = (evt) => {
    setDateTo(moment(evt.target.value).unix())
  }

  return {
    keyword,
    dateFrom,
    dateTo,
    handleChangeKeyword,
    handleChangeDateFrom,
    handleChangeDateTo,
  }
}
