import React from 'react'
import { ButtonForm } from './ButtonStyles'
import PropTypes from 'prop-types'

const Button = ({ children, disabled }) => {
  return <ButtonForm disabled={disabled}>{children}</ButtonForm>
}

export default Button

Button.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool
}
