import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { castDateToUnix, addDays } from '../../utils/DateParser'
import { StolenBikesContainer } from '../../components/StolenBikesContainer'
import { requestStolenBikes, requestPage } from '../../store/actionCreators'
import { PAGE_LEN_API, PAGE_LEN_UI } from './configPagination'

const getTotal = (bikes) =>
  bikes.length >= PAGE_LEN_API ? `+${PAGE_LEN_API}` : bikes.length

const StolenBikesContainerC = ({
  loading,
  error,
  stolenBikes,
  page,
  actions
}) => {
  useEffect(() => {
    actions.requestStolenBikes({
      page: 1,
      perPage: PAGE_LEN_API
    })
  }, [actions])

  const handleChangePage = (page) => {
    console.log(page)
    actions.requestPage(page)
  }
  const handleSearch = ({ textQuery = '', startDate = '', endDate = '' }) => {
    const unixStartDate = startDate
      ? castDateToUnix(startDate, 'YYYY-MM-DD').toString()
      : undefined
    const unixEndDate = endDate
      ? castDateToUnix(addDays(endDate, 'YYYY-MM-DD', 1), 'YYYY-MM-DD').toString()
      : undefined
    console.log(endDate)
    actions.requestStolenBikes({
      page: 1,
      perPage: PAGE_LEN_API,
      query: textQuery,
      occurred_after: unixStartDate,
      occurred_before: unixEndDate
    })
  }
  return (
    <StolenBikesContainer
      bikes={stolenBikes}
      page={page}
      lengthPage={PAGE_LEN_UI}
      total={getTotal(stolenBikes)}
      onChangePage={handleChangePage}
      onSearch={handleSearch}
      loading={loading}
      error={error}
    />
  )
}

const mapStateToProps = (state) => {
  const { loading, error, stolenBikes, page, lengthPage } = state

  return {
    loading,
    error,
    page,
    lengthPage,
    stolenBikes
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ requestStolenBikes, requestPage }, dispatch)
})

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(StolenBikesContainerC)
