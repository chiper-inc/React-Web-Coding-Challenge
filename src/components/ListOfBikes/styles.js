import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  & p {
    align-self: flex-end;
  }
`;

export const P = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  padding: 5px;
  border: none;
  border-radius: 8px;
  color: white;
  background-color: #0f4c75;
  outline: none;
  cursor: pointer;
  transition: all 50ms;
  /* &:active {
    transform: scale(0.1);
  } */
`;

export const Pages = styled.ul`
  display: flex;
  & li {
    margin: 0 10px;
    cursor: pointer;
  }
`;
