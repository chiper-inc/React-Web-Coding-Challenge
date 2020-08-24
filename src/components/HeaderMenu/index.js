import React from 'react'
import logo from './assets/logo_police.svg'
import { Container, Img, ContainerTitles, Title, SubTitle } from './styles'

export const HeaderMenu = () => (
  <Container className='bg-light'>
    <Img src={logo} alt='logo-police' />
    <ContainerTitles>
      <Title>Police Department of Berlin</Title>
      <SubTitle>Stolen bikes</SubTitle>
    </ContainerTitles>
  </Container>
)
