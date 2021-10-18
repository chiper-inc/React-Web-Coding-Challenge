import { globalStyles } from '@/styles/globalStyles';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Oswald', sans-serif;
  }

  body{
    background-color: ${globalStyles.colors.black20};
    color: ${globalStyles.colors.text}
  };

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding-bottom: ${globalStyles.metrics.padding};
  min-height: 100vh;
  background-color: ${globalStyles.colors.white};
  box-shadow: ${globalStyles.metrics.borderRadius};

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;
