import React from 'react';
import {Link} from 'react-router-dom';
import {Container,HeaderStyles,Title} from './Header.styles';


function Header() {
    return (
        <HeaderStyles>
            <Container>
                <Link to={'/'}>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Berliner_Polizei.svg/1200px-Berliner_Polizei.svg.png'} alt="police-logo"/>
                </Link>
                <Title>
                    <h1>Police Departament of Berlin</h1>
                    <h2>Stolen bykes</h2>
                </Title>
            </Container>
        </HeaderStyles>
    )
}

export default Header
