import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../../components/Form/Form'
import Input from '../../components/Form/Input'
import Button from '../../components/Helpers/Button/Button'
import Welcome from '../../components/Welcome/Welcome'
import useForm from '../../hooks/useForm'
import { userLogin } from '../../redux/reducers/user'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

const SignIn = ({ baseUrl }) => {
  const email = useForm()
  const password = useForm()
  const { loading, data } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if (data) router.push('/')
  }, [data, router])

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      if (email.validate() && password.validate()) {
        dispatch(
          userLogin(baseUrl, {
            identifier: email.value,
            password: password.value
          })
        )
      }
    },
    [email, password, dispatch, baseUrl]
  )

  return (
    <div>
      <Welcome
        text={`Aqui você pode anotar e manter do controle dos seus gastos. Cadastre-se
agora e começe a ter controle da sua vida financeira!`}
      />
      <Form text="Entre na sua conta" onSubmit={handleSubmit}>
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="Email aqui..."
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
          error={email.error}
        />
        <Input
          id="password"
          label="Senha"
          type="password"
          placeholder="Senha aqui..."
          value={password.value}
          onChange={password.onChange}
          onBlur={password.onBlur}
          error={password.error}
        />
        {!loading ? (
          <Button>Entrar</Button>
        ) : (
          <Button disabled>Entrando</Button>
        )}
      </Form>
    </div>
  )
}

export const getStaticProps = () => {
  const baseUrl = process.env.API_URL

  return {
    props: {
      baseUrl
    }
  }
}

export default SignIn

SignIn.propTypes = {
  baseUrl: PropTypes.string
}
