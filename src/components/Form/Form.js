import React from 'react'
import { FormPage } from './FormStyles'
import PropTypes from 'prop-types'

const Form = ({ children, onSubmit, text }) => {
  return (
    <FormPage onSubmit={onSubmit}>
      <h1>{text}</h1>
      {children}
    </FormPage>
  )
}

export default Form

Form.propTypes = {
  children: PropTypes.any,
  onSubmit: PropTypes.func,
  text: PropTypes.string
}
