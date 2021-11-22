import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 2rem;
  padding-top: 2rem;
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 400px;
  max-width: 100%;
  border-radius: 16px;
`;

export const ContainerInfo = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  color: #b5b5b5;
`;

export const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  @media screen and (max-width: 767px) {
    grid-auto-flow: row;
    grid-template-columns: none;
  }
`;
