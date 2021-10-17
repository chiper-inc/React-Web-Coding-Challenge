import { globalStyles } from '@/styles/globalStyles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }

  label {
    margin-bottom: 4px;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 1.3px;
  }

  input {
    font-family: inherits, sans-serif;
    height: 24px;
    border: 1px solid ${globalStyles.colors.black25};
    outline-color: black;
    border-radius: ${globalStyles.metrics.borderRadius};
    padding: ${globalStyles.metrics.padding};
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
