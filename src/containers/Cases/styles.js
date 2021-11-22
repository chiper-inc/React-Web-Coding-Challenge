import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 1.5em;
`;

export const SearchWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1.5em;
  justify-content: start;
`;

export const Total = styled.span`
  color: #b5b5b5;
  text-align: right;
`;

export const WrapperList = styled.div`
  display: grid;
  grid-gap: 1.2em;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const WrapperPaginator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const Text = styled.div`
  color: #b5b5b5;
`;
