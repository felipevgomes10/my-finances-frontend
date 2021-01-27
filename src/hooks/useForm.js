import { useCallback, useState } from 'react'

const useForm = () => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  const validate = useCallback(value => {
    if (value.length === 0) {
      setError('Preencha o campo')
      return false
    } else {
      setError(null)
      return true
    }
  }, [])

  const onChange = useCallback(
    ({ target }) => {
      setValue(target.value)
      if (error) setError(null)
    },
    [error]
  )

  const onBlur = useCallback(
    ({ target }) => {
      validate(target.value)
    },
    [validate]
  )

  return {
    value,
    error,
    onChange,
    onBlur,
    validate: () => validate(value)
  }
}

export default useForm
