import React from 'react'
import { Route, Switch } from 'wouter'
import { Grid } from '@material-ui/core'
import { Header } from '../components/Header'
import { Detail } from '../pages/Detail'
import { ErrorPage } from '../pages/ErrorPage'
import { Home } from '../pages/Home'
import { IncidentsContextProvider } from '../context/IncidentsContext'

export const App = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
      </Grid>
      <IncidentsContextProvider>
        <Switch>
          <Route component={Home} path='/' />
          <Route component={Detail} path='/detail/:id' />
          <Route component={ErrorPage} path='/:rest*' />
        </Switch>
      </IncidentsContextProvider>
    </>
  )
}
