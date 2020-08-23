import React, { Fragment, useContext } from 'react'
import { Grid } from '@material-ui/core'
import { Header } from '../components/Header'
import { SearchForm } from '../components/SearchForm'
import { Paginate } from '../components/Paginate'
import { Error } from '../components/Error'
import { Loading } from '../components/Loading'
import { ListOfIncidents } from '../components/ListOfIncidents'
import { usePaginate } from '../hooks/usePaginate'
import IncidentsContext from '../context/IncidentsContext'

export const Home = () => {
  const { page, handleChangePage } = usePaginate()

  const { loading, error, incidents } = useContext(IncidentsContext)

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchForm page={page} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {error !== null ? (
            <Error />
          ) : loading ? (
            <Loading />
          ) : (
            <ListOfIncidents incidents={incidents} />
          )}
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {!loading && (
            <Paginate
              currentPage={page}
              count={18}
              handleChangePage={handleChangePage}
            />
          )}
        </Grid>
      </Grid>
    </Fragment>
  )
}
