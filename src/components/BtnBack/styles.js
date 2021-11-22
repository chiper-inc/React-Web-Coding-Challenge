import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  &:focus {
    outline: 0;
  }
  & > svg {
    margin-right: 5px;
  }
`;
