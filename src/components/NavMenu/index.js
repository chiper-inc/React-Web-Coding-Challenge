import React, { useState } from 'react';
import { HOME, MAP, REPORT } from '../../routes';
import { Navbar, NavItem, NavbarToggler, Nav, NavbarBrand, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {HeaderMenu} from '../HeaderMenu'

export const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <HeaderMenu/>
            <Navbar color="light" light expand="md">
                <NavbarBrand href={HOME}>Stolen bykes</NavbarBrand>
                <NavbarToggler onClick={handleToggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className='nav-link' to={MAP}>Map</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to={REPORT}>Report</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}