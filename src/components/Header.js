import React from 'react';
import LogoApp from './images/logo-app.png';

export const Header = () => {

    return (
        <header>
            <h1>
                <img src={LogoApp} alt={LogoApp} />
            </h1>
            <h2>Police Department Berlin</h2>
            <h4>Stolen Bykes</h4>
        </header>
    )
}
