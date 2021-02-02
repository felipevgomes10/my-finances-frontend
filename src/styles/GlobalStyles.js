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

  body,
  label,
  input,
  button {
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

    @media (max-width: 700px) {
      margin-left: 5.6rem;
      width: calc(100% - 5.6rem);
      padding: 1.5rem 1rem;
    }

    @media (max-width: 370px) {
      margin-left: 3.6rem;
      width: calc(100% - 3.6rem);
    }
  }
`
