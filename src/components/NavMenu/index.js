import React, { useState } from 'react'
import { HOME, MAP } from '../../routes'
import { Navbar, NavItem, NavbarToggler, Nav, Collapse } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { HeaderMenu } from '../HeaderMenu'
import { withRouter } from 'react-router'

export const NavMenuP = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen(!isOpen)
  return (
    <header>
      <HeaderMenu />
      <Navbar color='light' light expand='md'>
        <NavLink to={HOME} className='navbar-brand'>
          Stolen bikes
        </NavLink>
        <NavbarToggler onClick={handleToggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink
                activeClassName='font-weight-bold text-primary'
                isActive={() => location.pathname === HOME}
                className='nav-link'
                to={HOME}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                activeClassName='font-weight-bold text-primary'
                isActive={() => location.pathname === MAP}
                className='nav-link'
                to={MAP}
              >
                Map
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  )
}

export const NavMenu = withRouter(NavMenuP)
