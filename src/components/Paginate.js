import React from "react";
import { Pagination } from "@material-ui/lab";
import { PaginateContainer } from "../styles/PaginateStyles";

export const Paginate = ({ currentPage, count, handleChangePage }) => {
  return (
    <PaginateContainer>
      <Pagination count={count} page={currentPage} onChange={handleChangePage} />
    </PaginateContainer>
  );
};
