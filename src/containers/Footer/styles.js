import styled from 'styled-components'

export const Wrapper = styled.footer`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 6px;
  padding: 15px 8%;
  background-color: #1a1a1a;
  color: #b5b5b5;
  box-shadow: 0px -2px 5px 0px rgb(0 0 0 / 20%);
  @media screen and (max-width: 767px) {
    grid-auto-flow: row;
  }
`;

export const Item = styled.div`
  font-size: 0.85rem;
  text-align: ${({ align }) => align ? align : ''};
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;
