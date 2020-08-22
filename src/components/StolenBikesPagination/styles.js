import styled from "styled-components/macro";
import { Pagination as PaginationB } from "reactstrap";

export const Pagination = styled(PaginationB)`
  width: fit-content;
  margin: auto;
`;

export const Container = styled.div`
  position: absolute;
  width: calc(100% - 4rem);
  bottom: 0;
`;
