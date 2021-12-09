import styled from 'styled-components';

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 20%;
  
  .message {
    color: forestgreen;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
  
  .button {
    padding: 10px;
    background-color: green;
    color: white;
    border: 1px solid darkgreen;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
  }
`;
