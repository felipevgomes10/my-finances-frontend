import { useRouter } from 'next/router'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../../components/Form/Form'
import Input from '../../components/Form/Input'
import Button from '../../components/Helpers/Button/Button'
import ErrorText from '../../components/Helpers/Error/Error'
import Welcome from '../../components/Welcome/Welcome'
import useForm from '../../hooks/useForm'
import PropTypes from 'prop-types'
import { createNewUser } from '../../redux/reducers/createUser'
import Logo from '../../../public/money.jpg'
import PageHead from '../../components/Head'

const SignUp = ({ baseUrl }) => {
  const username = useForm()
  const email = useForm()
  const password = useForm()
  const { user } = useSelector(state => state)
  const { createUser } = useSelector(state => state)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if (user.data) router.push('/')
  }, [router, user.data])

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      if (username.validate() && email.validate() && password.validate()) {
        dispatch(
          createNewUser(baseUrl, {
            username: username.value,
            email: email.value,
            password: password.value
          })
        )
      }
    },
    [username, email, password, dispatch, baseUrl]
  )

  return (
    <>
      <PageHead
        title="Cadastrar | My Finances"
        description="Página de cadastro do web app My Finances. Com o My Finances você pode configurar uma meta financeira e a partir disso controlar as quantias de dinheiro que entram e saem da sua carteira. Nunca mais perca a conta do seu dinheiro, venha para o My Finances!"
        href="https://myfinances.vercel.app/cadastrar"
        author="Felipe Gomes | Desenvolvedor Web"
        robots="index,follow"
        ogTitle="My Finances | Cadastrar"
        ogDescription="Página de cadastro do web app My Finances. Com o My Finances você pode configurar uma meta financeira e a partir disso controlar as quantias de dinheiro que entram e saem da sua carteira. Nunca mais perca a conta do seu dinheiro, venha para o My Finances!"
        ogUrl="https://myfinances.vercel.app/cadastrar"
        ogSiteName="My Finances"
        ogImage={Logo}
        ogType="website"
        ogAlt="website logo"
        ogLocale="pt-BR"
        twitterTitle="My Finances | Cadastrar"
        twitterDescription="Página de cadastro do web app My Finances. Com o My Finances você pode configurar uma meta financeira e a partir disso controlar as quantias de dinheiro que entram e saem da sua carteira. Nunca mais perca a conta do seu dinheiro, venha para o My Finances!"
        twitterUrl="https://myfinances.vercel.app/cadastrar"
        twitterCard="summary"
        twitterImage={Logo}
        twitterAlt="website logo"
        twitterCreator="@felipevgomes10"
      />
      <div>
        <Welcome
          text={
            'Aqui você pode anotar e manter do controle dos seus gastos. Cadastre-se agora e começe a ter controle da sua vida financeira!'
          }
        />
        <Form text="Crie sua conta" onSubmit={handleSubmit}>
          <Input
            id="username"
            label="Usuário"
            type="text"
            placeholder="Usuário aqui..."
            value={username.value}
            onChange={username.onChange}
            onBlur={username.onBlur}
            error={username.error}
          />
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
          {createUser.error && <ErrorText>{createUser.error}</ErrorText>}
          {!createUser.loading && !user.loading ? (
            <Button>Cadastrar</Button>
          ) : (
            <Button disabled>Aguarde</Button>
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

export default SignUp

SignUp.propTypes = {
  baseUrl: PropTypes.string
}
