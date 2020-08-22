import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import { Header } from '../components/Header'
import { SearchForm } from '../components/SearchForm'

export const Home = () => {
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchForm />
        </Grid>
      </Grid>
    </Fragment>
  )
}
