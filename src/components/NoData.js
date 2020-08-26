import React from 'react'
import { Typography } from '@material-ui/core'
import { NoDataContainer } from '../styles/NoDataStyles'

export const NoData = () => {
  return (
    <NoDataContainer>
      <Typography variant='h3' component='h3' color='primary'>
        No results
      </Typography>
    </NoDataContainer>
  )
}
