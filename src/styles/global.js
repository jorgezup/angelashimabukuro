import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  html {
    /* font-size: clamp(14px, 4vw, 16px); */
    font-size: 100%;
  }

  @media(min-width: 320px) {
    html {
      font-size: 80%;
    }
  }

  @media(min-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }

  @media(min-width: 1024px) {
    html {
      font-size: 94%;
    }
  }

  body {
    background: #f2f2f5;
    color: #111;

    font-size: 1rem;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    line-height: 2rem;
  }
`;
