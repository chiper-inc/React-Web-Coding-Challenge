import styled from "styled-components";

export const StyledTitle = styled.span`
  display: flex;
  font-size: 1.8rem;
  font-weight: 800;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  color: ${({ textColor }) => textColor ? '#ff7a18' : '#b5b5b5' };
`;
