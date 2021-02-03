import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyles'
import { theme } from '../themes/primary'
import Navbar from '../components/Navbar/Navbar'
import store from '../redux/configureStore'
import { Blur } from '../components/Modals/ModalStyles'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Blur
            className="NavBarBlur"
            style={{ display: 'none', zIndex: '8' }}
          />
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
