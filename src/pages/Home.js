import React, { useContext } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { SearchForm } from '../components/SearchForm'
import { Paginate } from '../components/Paginate'
import { Error } from '../components/Error'
import { Loading } from '../components/Loading'
import { ListOfIncidents } from '../components/ListOfIncidents'
import { usePaginate } from '../hooks/usePaginate'
import IncidentsContext from '../context/IncidentsContext'
import { NoData } from '../components/NoData'

export const Home = () => {
  const { page, handleChangePage } = usePaginate()

  const { loading, error, incidents } = useContext(IncidentsContext)

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchForm page={page} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>Total 180</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {error !== null ? (
            <Error />
          ) : loading ? (
            <Loading />
          ) : incidents.length === 0 ? (
            <NoData />
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
    </>
  )
}
