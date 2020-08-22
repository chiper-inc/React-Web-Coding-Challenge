import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Header } from '../components/Header'

export const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
    </Grid>
  )
}
