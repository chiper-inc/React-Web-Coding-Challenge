import styled from 'styled-components';

import { ItemProps } from '.';

export const Nav = styled.nav`
  color: #444;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 12px !important;
  font-weight: 700;
`;
export const Item = styled.li<ItemProps>`
  display: inline-block;
  pointer-events: ${({ disabled }) => disabled && `none`};
  cursor: ${({ disabled }) => (disabled ? `not-allowed` : `pointer`)};
  margin: 0 5px;

  span {
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background-color: ${({ active, color }) =>
      active ? color : `transparent`};
    color: ${({ active }) => (active ? `#fff` : `#999CA0`)};
  }
`;

export const Previous = styled.span`
  border: 1px solid #999ca0;
`;
export const Next = styled.span`
  border: 1px solid #999ca0;
`;
