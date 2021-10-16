import { globalStyles } from '@/styles/globalStyles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: center;
  width: 100%;

  label {
    margin-bottom: 4px;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 1.3px;
    margin-left: ${globalStyles.metrics.margin};
  }

  input {
    width: 100%;
    font-family: inherits, sans-serif;
    height: 24px;
    border: 1px solid ${globalStyles.colors.black50};
    outline-color: black;
    border-radius: ${globalStyles.metrics.borderRadius};
    padding: ${globalStyles.metrics.padding};
  }
`;
