import React from 'react'
import { Route, Switch } from 'wouter'
import { Detail } from '../pages/Detail'
import { ErrorPage } from '../pages/ErrorPage'
import { Home } from '../pages/Home'
import { IncidentsContextProvider } from '../context/IncidentsContext'

export const App = () => {
  return (
    <IncidentsContextProvider>
      <Switch>
        <Route component={Home} path="/" />
        <Route component={Detail} path="/detail/:id" />
        <Route component={ErrorPage} path="/:rest*" />
      </Switch>
    </IncidentsContextProvider>
  )
}
