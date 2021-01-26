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
    font-size: 1.6rem;
    min-height: calc(100vh + 5px);
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
    color: #333;
  }
`
