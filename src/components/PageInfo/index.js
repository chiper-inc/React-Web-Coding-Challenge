import React from 'react'
import { Container } from './styles'
import icon from './assets/austronat.svg'

export const PageInfo = ({ children }) => (
  <Container className='container row'>
    <div className='col-md-6 align-self-center'>
      <img src={icon} />
    </div>
    <div className='col-md-6 align-self-center'>{children}</div>
  </Container>
)
