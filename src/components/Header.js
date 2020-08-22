import React from 'react'
import Typography from '@material-ui/core/Typography'
import logo from '../assets/image/logo.jpg'
import {
  HeaderContainer,
  HeaderCover,
  HeaderDetails,
} from '../styles/HeaderStyles'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderCover src={logo} alt="Live from space album cover" />
      <HeaderDetails>
        <Typography component="h5" variant="h5">
          Police Departament of Berlin
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Stolen bykes
        </Typography>
      </HeaderDetails>
    </HeaderContainer>
  )
}
