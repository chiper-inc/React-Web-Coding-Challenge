import styled from 'styled-components';

export const SearchContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 20%;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border:1px solid green;
    box-shadow: 0 0 2px greenyellow;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: green;
  color: white;
  border: 1px solid darkgreen;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: green;
  }
`;
