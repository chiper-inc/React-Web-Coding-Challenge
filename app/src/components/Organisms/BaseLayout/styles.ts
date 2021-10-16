import { globalStyles } from '@/styles/globalStyles';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
  html, body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Oswald', sans-serif;
  }

  body{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: ${globalStyles.colors.black20};
  };

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
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
