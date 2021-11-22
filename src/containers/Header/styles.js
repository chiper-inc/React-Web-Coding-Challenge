import styled from 'styled-components'

export const Wrapper = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  grid-gap: 6px;
  padding: 20px 8%;
  background-color: #1a1a1a;
  color: #b5b5b5;
  box-shadow: 0px 2px 5px 0px rgb(0 0 0 / 20%);
  align-items: center;
`;

export const Text = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: #b5b5b5;
  text-align: center;
`;
