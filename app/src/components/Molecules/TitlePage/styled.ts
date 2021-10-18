import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
