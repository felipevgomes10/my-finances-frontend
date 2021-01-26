import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyles'
import { theme } from '../themes/primary'
import Navbar from '../components/Navbar/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object
}
