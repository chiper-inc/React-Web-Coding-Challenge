import React from 'react'
import Search from '../Search/Search';
import StyledDiv from './styled';
import LOGO from '../../assests/unknown.png';

const NavBar = () => {
    return (
        <StyledDiv>
            <div className='container'>
                <div className='logo-container'>
                    <img src={LOGO} alt='logo' />
                </div>
                <div className='title-container'>
                    <h1>Police Departament of Berlin</h1>
                    <h3>Stolen bykes</h3>
                </div>
            </div>
            <div className='searchBar'>
                <Search />
            </div>
        </StyledDiv>
    );
};

export default NavBar;
