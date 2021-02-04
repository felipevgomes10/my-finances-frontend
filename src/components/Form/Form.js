import React from 'react'
import { FormPage } from './FormStyles'
import PropTypes from 'prop-types'
import { item } from '../../animations/fade'

const Form = ({ children, onSubmit, text }) => {
  return (
    <FormPage onSubmit={onSubmit} variants={item}>
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
