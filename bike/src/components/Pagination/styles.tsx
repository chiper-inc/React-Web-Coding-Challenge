import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 15rem;
`;

export const Button = styled.div`  
  padding: 10px;
  background-color: white;
  color: deepskyblue;
  border-radius: 5px;
  border: 1px solid dodgerblue;
  
  &:hover {
    background-color: dodgerblue;
    color: white;
    cursor: pointer;
  }
`;
