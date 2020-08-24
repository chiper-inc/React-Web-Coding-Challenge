import React from 'react'
import { ErrorContainer } from '../styles/ErrorStyles'
import { Typography } from '@material-ui/core'

export const ErrorPage = () => {
  return (
    <ErrorContainer>
      <Typography variant="h3" component="h3">
        404 Not Found
      </Typography>
    </ErrorContainer>
  )
}
