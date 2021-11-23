import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: "Stolzl";
  src: url("/fonts/Stolzl-Regular.eot");
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Stolzl";
  src: url("/fonts/Stolzl-Regular.svg");
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Stolzl";
  src: url("/fonts/Stolzl-Regular.ttf");
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Stolzl";
  src: url("/fonts/Stolzl-Regular.woff");
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Stolzl";
  src: url("/fonts/Stolzl-Regular.woff2");
  font-style: normal;
  font-display: swap;
}

html {
  scroll-behavior: smooth;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: "Stolzl", sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  canvas {
    display: none !important;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: none;
    background-color: transparent
  }

  ::-webkit-scrollbar {
      width: 6px;
      background-color: transparent
  }

  ::-webkit-scrollbar-thumb {
      background-color: rgba(255,255,255,.25);
      -webkit-border-radius: 6px;
      border-radius: 6px
  }

  ul {
    padding-left: 0;
  }

  h1, h2 {
    margin: 0;
  }

  .container {
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
