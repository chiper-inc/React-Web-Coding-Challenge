import styled from 'styled-components'

export const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  background: linear-gradient(85deg, #434343, #262626);
  color: #b5b5b5;
  padding: ${({ size }) => size === 'small' ? '0.8rem' : '1.2rem' };
  border-radius: 16px;
  font-weight: ${({ size }) => size === 'small' ? '400' : '600' };
  border-width: 0;
  border-style: none;
  &:hover:not([disabled]) {
    color: #ff7a18;
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.6;
  }
`;
