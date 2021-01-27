import React from 'react'
import PropTypes from 'prop-types'
import { Message } from './ErrorStyles'

const ErrorText = ({ children }) => {
  return <Message>{children}</Message>
}

export default ErrorText

ErrorText.propTypes = {
  children: PropTypes.any
}
