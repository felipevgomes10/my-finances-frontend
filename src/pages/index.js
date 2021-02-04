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
import Entry from '../components/Entry/Entry'
import earnings from '../redux/filters/earnings'
import expenses from '../redux/filters/expenses'
import PageHead from '../components/Head'
import { motion } from 'framer-motion'
import { wrapper } from '../animations/fade'

const Home = ({ baseUrl }) => {
  const { user } = useSelector(state => state)

  const userEarnings = useSelector(earnings)
  const userExpenses = useSelector(expenses)

  const { budgetModal } = useSelector(state => state)
  const { deleteModal } = useSelector(state => state)
  const { entryModal } = useSelector(state => state)

  const router = useRouter()

  useEffect(() => {
    if (!user.data) {
      router.push('/entrar')
    }
  }, [router, user.data])

  if (!user.data) return <PageHead title="Página Inicial | My Finances" />
  return (
    <>
      <PageHead title="Página Inicial | My Finances" />
      <motion.section initial="hidden" animate="visible" variants={wrapper}>
        <Welcome
          heading={`Olá, ${user.data.user.username}`}
          text="Aqui você pode anotar e manter o controle dos seus gastos. Começe a ter controle da sua vida financeira!"
        />
        <Board>
          <Budget />
          <TableItems title="Gastos" first>
            {userExpenses.map(({ description, value, id, type }) => (
              <Entry
                key={id}
                id={id}
                description={description}
                value={value}
                type={type}
              />
            ))}
          </TableItems>
          <TableItems title="Ganhos" second>
            {userEarnings.map(({ description, value, id, type }) => (
              <Entry
                key={id}
                id={id}
                description={description}
                value={value}
                type={type}
              />
            ))}
          </TableItems>
          <TableItems title="Histórico completo" third>
            {user.data.user.entries.map(({ description, value, id, type }) => (
              <Entry
                key={id}
                id={id}
                description={description}
                value={value}
                type={type}
              />
            ))}
          </TableItems>
        </Board>
        {budgetModal.open && <BudgetModal baseUrl={baseUrl} />}
        {deleteModal.open && <DeleteModal baseUrl={baseUrl} />}
        {entryModal.open && <EntryModal baseUrl={baseUrl} />}
      </motion.section>
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

export default Home

Home.propTypes = {
  baseUrl: PropTypes.string
}
