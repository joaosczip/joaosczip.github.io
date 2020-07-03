import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, h1, h2, h3, h4, p, span, div {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
