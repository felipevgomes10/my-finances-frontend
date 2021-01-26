import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: Roboto Mono;
    font-weight: 400;
    color: #FFFFFF;
    font-size: 1.6rem;
  }

  img {
    display: block;
  }

  ul {
    list-style: none;
  }

  a,
  a:link,
  a:visited {
    text-decoration: none;
  }

  main {
    margin-left: 25.6rem;
    min-height: 100vh;
    width: calc(100% - 25.6rem);
    background: #22242c;
    padding: 6rem 3rem;
  }
`
