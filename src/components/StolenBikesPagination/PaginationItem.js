import React from "react";
import { PaginationItem as PaginationItemB, PaginationLink } from "reactstrap";

export const PaginationItem = ({
  children,
  onClick,
  first = false,
  active = false,
  disabled = false,
}) => (
  <PaginationItemB disabled={disabled} active={active}>
    <PaginationLink first={first} onClick={onClick}>
      {children}
    </PaginationLink>
  </PaginationItemB>
);
