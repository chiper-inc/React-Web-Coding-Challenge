import React from "react";
import { Pagination, Container } from "./styles";
import { PaginationItem } from "./PaginationItem";

export const StolenBikesPagination = ({
  page = 1,
  total = "unknown",
  onClickNext,
  onClickPrev,
  onClickFirst,
  onClickLast,
}) => (
  <Container>
    <Pagination aria-label="Page navigation example">
      <PaginationItem first={true}>{"<< First"}</PaginationItem>
      <PaginationItem>{"< Prev"}</PaginationItem>
      {page > 0 && <PaginationItem>{page - 1}</PaginationItem>}
      <PaginationItem active={true}>{page}</PaginationItem>
      <PaginationItem>{page + 1}</PaginationItem>
      <PaginationItem>{"Next >"}</PaginationItem>
      <PaginationItem>{"Last >>"}</PaginationItem>
    </Pagination>
  </Container>
);
