import React from 'react'
import moment from 'moment';
import { Container, Img, ContainerTitles, Title, Description, Footer } from './styles';
import logoBike from './assets/bike.svg';

const getDate = (unixTime) => moment.unix(unixTime).format('DD/MM/YYYY');

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
                <Footer>{`${getDate(occurred_at)} - ${address}`}</Footer>
            </ContainerTitles>
        </Container>
    )