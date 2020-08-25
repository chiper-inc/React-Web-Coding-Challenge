import React from 'react'
import { NavMenu } from '../NavMenu'
import { ContainerLayout, Container } from './styles'

export const Layout = ({ children }) => (
  <ContainerLayout id='layout'>
    <NavMenu />
    <Container>{children}</Container>
  </ContainerLayout>
)
