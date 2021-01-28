import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Welcome from '../components/Welcome/Welcome'
import Board from '../components/Board/Board'
import Budget from '../components/Board/Budget/Budget'
import BudgetModal from '../components/Modals/BudgetModal/BudgetModal'
import PropTypes from 'prop-types'

const Home = ({ baseUrl }) => {
  const { user } = useSelector(state => state)
  const { budgetModal } = useSelector(state => state)
  const router = useRouter()

  useEffect(() => {
    if (!user.data) {
      router.push('/entrar')
    }
  }, [router, user.data])

  if (!user.data) return null
  return (
    <div>
      <Welcome text="Aqui você pode anotar e manter do controle dos seus gastos. Começe a ter controle da sua vida financeira!" />
      <Board>
        <Budget />
      </Board>
      {budgetModal.open && <BudgetModal baseUrl={baseUrl} />}
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

export default Home

Home.propTypes = {
  baseUrl: PropTypes.string
}
