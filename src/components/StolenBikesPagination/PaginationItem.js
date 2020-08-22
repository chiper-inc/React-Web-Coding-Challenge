import React from "react";
import { PaginationItem as PaginationItemB, PaginationLink } from "reactstrap";

export const PaginationItem = ({ children, first = false, active = false }) => (
  <PaginationItemB>
    <PaginationLink first={first} active={active.toString()}>
      {children}
    </PaginationLink>
  </PaginationItemB>
);
