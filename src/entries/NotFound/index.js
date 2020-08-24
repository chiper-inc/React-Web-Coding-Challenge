import React from 'react'
import { NavLink } from 'react-router-dom'
import { HOME } from '../../routes'
import { PageInfo } from '../../components/PageInfo'

export const NotFound = () => (
  <PageInfo>
    <h1>404</h1>
    <h2>UH OH! You're lost.</h2>
    <p>
      The page you are looking for does not exist. How you got here is a
      mystery. But you can click the button below to go back to the homepage.
    </p>
    <NavLink
      to={HOME}
      isActive={() => false}
      className='btn btn-outline-secondary'
    >
      HOME
    </NavLink>
  </PageInfo>
)
