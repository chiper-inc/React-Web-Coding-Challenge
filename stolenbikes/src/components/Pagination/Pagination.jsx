import React from "react";
import { Button, PaginateContainer,Pages } from './Pagination.styles';


function Pagination({ casesPerPage, totalCasesCount,paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCasesCount / casesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <PaginateContainer>
      <Pages className="page-numbers">
        {pageNumbers.map((number) => (
          <li key={number}>
            <Button onClick={()=> paginate(number)}>
              {number}
            </Button>
          </li>
        ))}
      </Pages>
    </PaginateContainer>
  );
}

export default Pagination;
