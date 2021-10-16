import styled from 'styled-components'

import { darken, opacify } from 'polished'

import { ButtonProps } from '.'
import globalStyles from '@styles/styles'

export const Container = styled.button<ButtonProps>`
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  filter: ${({ disabled }) => (disabled ? 'grayscale(1)' : 'grayscale(0)')};
  opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin: 0;
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  outline: none;
  border-radius: ${globalStyles.metrics.borderRadius};
  background-color: ${({ color, outlined }) =>
    outlined ? 'transparent' : color};
  color: ${({ color, outlined }) =>
    outlined ? color : globalStyles.colors.white};
  border: 2px solid ${({ color }) => color};
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.5px;

  span {
    margin: 0px 8px;
  }

  svg {
    font-size: 14px;
  }

  & .spin {
    font-size: 12px;
    animation: spin-animation 1s infinite;
    @keyframes spin-animation {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(90deg);
      }
      50% {
        transform: rotate(180deg);
      }
      75% {
        transform: rotate(270deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  &:hover {
    background-color: ${({ color, outlined }) =>
      outlined ? opacify(0.2, color) : darken(0.1, color)};
    color: ${globalStyles.colors.white};
    border: 2px solid ${({ color }) => color};
  }
`
