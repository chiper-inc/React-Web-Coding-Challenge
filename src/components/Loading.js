import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { LoadingContainer } from '../styles/LoadingStyles'

export const Loading = () => {
  return (
    <LoadingContainer>
      <CircularProgress />
    </LoadingContainer>
  )
}
