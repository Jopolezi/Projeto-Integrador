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

  a {
    text-decoration: none;
    color: var(--tertiary-color);
  }

  li {
    list-style: none;
}

  :root {
    --primary-color:rgb(0, 49, 83);
    --secondary-color: #5f6c7b;
    --tertiary-color: #f0f0f0;
    --quartenary-color: #3da9fc;
    --quinary-color: #90b4ce;
    --width: width: calc(100% - 20%);
  }
`;

export default GlobalStyles;