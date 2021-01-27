import React from 'react'
import { InputForm, LabelForm } from './InputStyles'
import PropTypes from 'prop-types'
import ErrorText from '../Helpers/Error/Error'

const Input = ({ label, type, placeholder, id, error, ...props }) => {
  return (
    <>
      <LabelForm id={id} name={id}>
        {label}
      </LabelForm>
      <InputForm
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </>
  )
}

export default Input

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string
}
