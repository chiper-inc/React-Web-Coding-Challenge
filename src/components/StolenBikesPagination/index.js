import React from "react";
import { Pagination, Container } from "./styles";
import { PaginationItem } from "./PaginationItem";

export const StolenBikesPagination = ({ page, totalPages, onChangePage }) => {
  const prevPage = page - 1;
  const nextPage = page + 1;
  return (
    <Container>
      <Pagination aria-label="Page navigation example">
        <PaginationItem first={true} onClick={() => onChangePage(1)}>
          {"<< First"}
        </PaginationItem>
        <PaginationItem
          disabled={page <= 1}
          onClick={() => onChangePage(prevPage)}
        >
          {"< Prev"}
        </PaginationItem>
        {page > 1 && (
          <PaginationItem onClick={() => onChangePage(prevPage)}>
            {prevPage}
          </PaginationItem>
        )}
        <PaginationItem active={true}>{page}</PaginationItem>
        {totalPages > page && (
          <PaginationItem onClick={() => onChangePage(nextPage)}>
            {nextPage}
          </PaginationItem>
        )}
        <PaginationItem
          disabled={page >= totalPages}
          onClick={() => onChangePage(nextPage)}
        >
          {"Next >"}
        </PaginationItem>
        <PaginationItem
          disabled={page >= totalPages}
          onClick={() => onChangePage(totalPages)}
        >
          {"Last >>"}
        </PaginationItem>
      </Pagination>
    </Container>
  );
};


