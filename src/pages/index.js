import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Welcome from '../components/Welcome/Welcome'
import Board from '../components/Board/Board'
import Budget from '../components/Board/Budget/Budget'
import BudgetModal from '../components/Modals/BudgetModal/BudgetModal'
import PropTypes from 'prop-types'
import DeleteModal from '../components/Modals/DeleteModal/DeleteModal'
import TableItems from '../components/Board/TableItems/TableItems'
import EntryModal from '../components/Modals/EntryModal/EntryModal'

const Home = ({ baseUrl }) => {
  const { user } = useSelector(state => state)
  const { budgetModal } = useSelector(state => state)
  const { deleteModal } = useSelector(state => state)
  const { entryModal } = useSelector(state => state)
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
        <TableItems title="Gastos" first />
        <TableItems title="Ganhos" second />
        <TableItems title="Histórico completo" third />
      </Board>
      {budgetModal.open && <BudgetModal baseUrl={baseUrl} />}
      {deleteModal.open && <DeleteModal baseUrl={baseUrl} />}
      {entryModal.open && <EntryModal baseUrl={baseUrl} />}
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
