import React from 'react'
import logo from './assets/logo_police.svg';
import { Container, Img, ContainerTitles, Title, SubTitle } from './styles';

export const HeaderMenu = () => (
    <Container>
        <Img src={logo} alt='logo-police' />
        <ContainerTitles>
            <Title>Police Department of Berlin</Title>
            <SubTitle>Stolen bykes</SubTitle>
        </ContainerTitles>
    </Container>
)