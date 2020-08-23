import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import { Header } from '../components/Header'
import { SearchForm } from '../components/SearchForm'
import { Paginate } from '../components/Paginate'
import { usePaginate } from '../hooks/usePaginate'

export const Home = () => {
  const { page, handleChangePage } = usePaginate()

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
          <Grid container justify="center" spacing={2}></Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Paginate
              currentPage={page}
              count={18}
              handleChangePage={handleChangePage}
            />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  )
}
