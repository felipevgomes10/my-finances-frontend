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
import ErrorText from '../../components/Helpers/Error/Error'
import PageHead from '../../components/Head'
import Logo from '../../../public/money.jpg'

const SignIn = ({ baseUrl }) => {
  const email = useForm()
  const password = useForm()
  const { loading, data, error } = useSelector(state => state.user)
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
    <>
      <PageHead
        title="Entrar | My Finances"
        description="Página de login do web app My Finances. Com o My Finances você pode configurar uma meta financeira e a partir disso controlar as quantias de dinheiro que entram e saem da sua carteira. Nunca mais perca a conta do seu dinheiro, venha para o My Finances!"
        href="https://myfinances.vercel.app/entrar"
        author="Felipe Gomes | Desenvolvedor Web"
        robots="index,follow"
        ogTitle="My Finances | Entrar"
        ogDescription="Página de login do web app My Finances. Com o My Finances você pode configurar uma meta financeira e a partir disso controlar as quantias de dinheiro que entram e saem da sua carteira. Nunca mais perca a conta do seu dinheiro, venha para o My Finances!"
        ogUrl="https://myfinances.vercel.app/entrar"
        ogSiteName="My Finances"
        ogImage={Logo}
        ogType="website"
        ogAlt="website logo"
        ogLocale="pt-BR"
        twitterTitle="My Finances | Entrar"
        twitterDescription="Página de login do web app My Finances. Com o My Finances você pode configurar uma meta financeira e a partir disso controlar as quantias de dinheiro que entram e saem da sua carteira. Nunca mais perca a conta do seu dinheiro, venha para o My Finances!"
        twitterUrl="https://myfinances.vercel.app/entrar"
        twitterCard="summary"
        twitterImage={Logo}
        twitterAlt="website logo"
        twitterCreator="@felipevgomes10"
      />
      <div>
        <Welcome
          text={
            'Aqui você pode anotar e manter do controle dos seus gastos. Entre na sua conta e começe a ter controle da sua vida financeira!'
          }
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
          {error && <ErrorText>{error}</ErrorText>}
          {!loading ? (
            <Button>Entrar</Button>
          ) : (
            <Button disabled>Entrando</Button>
          )}
        </Form>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const baseUrl = process.env.API_URL

  return {
    props: {
      baseUrl
    },
    revalidate: 1
  }
}

export default SignIn

SignIn.propTypes = {
  baseUrl: PropTypes.string
}
