import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100dvh;
    font-family: 'Roboto', sans-serif;
    background-color: var(--tertiary-color);
  }

  html {
   scroll-behavior: smooth; 
  }

`;

export default GlobalStyles;