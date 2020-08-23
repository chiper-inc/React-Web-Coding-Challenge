import React from 'react'
import { PaginationItem as PaginationItemB } from 'reactstrap'
import { PaginationLink } from './styles'

export const PaginationItem = ({
  children,
  onClick,
  first = false,
  active = false,
  disabled = false
}) => (
  <PaginationItemB disabled={disabled} active={active}>
    <PaginationLink first={first} onClick={onClick}>
      {children}
    </PaginationLink>
  </PaginationItemB>
)
