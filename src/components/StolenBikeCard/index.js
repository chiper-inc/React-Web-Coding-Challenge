import React from 'react'
import { Container, Img, ContainerTitles, Title, Description, Footer } from './styles';
import logoBike from './assets/bike.svg';

export const StolenBikeCard = ({
    title,
    description,
    address,
    occurred_at,
    updated_at,
    media: {
        image_url_thumb
    }
}) => (
        <Container>
            <Img src={image_url_thumb || logoBike} alt='logo-police' />
            <ContainerTitles>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Footer>{`${occurred_at} - ${address}`}</Footer>
            </ContainerTitles>
        </Container>
    )