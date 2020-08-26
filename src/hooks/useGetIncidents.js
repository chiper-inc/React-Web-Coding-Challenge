import { useContext, useEffect } from 'react'
import { getIncidents } from '../services/getIncidents'
import moment from 'moment'
import IncidentsContext from '../context/IncidentsContext'

export const useGetIncidents = ({
  page,
  per_page,
  keyword,
  dateTo,
  dateFrom
}) => {
  const {
    loading,
    error,
    incidents,
    currentDate,
    setLoading,
    setError,
    setIncidents,
    setCurrentDate
  } = useContext(IncidentsContext)

  useEffect(() => {
    setError(null)
    setLoading(true)

    const params = {
      page: page,
      per_page: per_page,
      keyword: keyword,
      occurred_before: dateTo,
      occurred_after: dateFrom
    }

    getIncidents(params)
      .then(({ incidents }) => {
        if (typeof incidents === 'undefined') {
          setError('Error')
        } else {
          setIncidents(incidents)
          setLoading(false)
        }
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
    handleClickSearch
  }
}
