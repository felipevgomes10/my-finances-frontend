import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyles'
import { theme } from '../themes/primary'
import Navbar from '../components/Navbar/Navbar'
import { Provider } from 'react-redux'
import store from '../redux/configureStore'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <main>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </Provider>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object
}
