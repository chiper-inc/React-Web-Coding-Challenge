import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 20%;
  
  .message {
    color: red;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
  
  .button {
    padding: 10px;
    background-color: darkred;
    color: white;
    border: 1px solid red;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
  }
`;
