import { useState, useEffect } from 'react'
import { getIncidents } from '../services/getIncidents'
import moment from 'moment'

export const useGetIncidents = ({
  page,
  per_page,
  keyword,
  dateTo,
  dateFrom,
}) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [incidents, setIncidents] = useState(undefined)
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    setLoading(true)
    const params = {
      page: page,
      per_page: per_page,
      keyword: keyword,
      occurred_before: dateTo,
      occurred_after: dateFrom,
    }

    getIncidents(params)
      .then(({ incidents }) => {
        setIncidents(incidents)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [page, currentDate])

  const handleClickSearch = () => {
    setLoading(true)
    setCurrentDate(moment())
  }

  return {
    loading,
    error,
    incidents,
    handleClickSearch,
  }
}
