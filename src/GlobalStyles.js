import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button: {
    border: 0;
    outline: 0;
  }

  body {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background: #F3F6FD;
    color: #1b262c;
    overscroll-behavior: none;
  }
`;

export default GlobalStyles;
