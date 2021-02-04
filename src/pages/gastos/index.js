import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import TableItems from '../../components/Board/TableItems/TableItems'
import Entry from '../../components/Entry/Entry'
import EntryModal from '../../components/Modals/EntryModal/EntryModal'
import expenses from '../../redux/filters/expenses'
import PropTypes from 'prop-types'
import DeleteModal from '../../components/Modals/DeleteModal/DeleteModal'
import PageHead from '../../components/Head'
import { motion } from 'framer-motion'
import { wrapper } from '../../animations/fade'

const Expenses = ({ baseUrl }) => {
  const { user } = useSelector(state => state)

  const { entryModal } = useSelector(state => state)
  const { deleteModal } = useSelector(state => state)

  const router = useRouter()

  const userExpenses = useSelector(expenses)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (!user.data) {
      router.push('/entrar')
    }
  }, [router, user.data])

  useEffect(() => {
    const total = userExpenses?.reduce((acc, item) => {
      return acc + item.value
    }, 0)
    setTotal(total)
  }, [userExpenses])

  if (!user.data) return null
  return (
    <>
      <PageHead title="Gastos | My Finances" />
      <motion.section initial="hidden" animate="visible" variants={wrapper}>
        <TableItems title="Gastos" total={total}>
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
        {entryModal.open && <EntryModal baseUrl={baseUrl} />}
        {deleteModal.open && <DeleteModal baseUrl={baseUrl} />}
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

Expenses.propTypes = {
  baseUrl: PropTypes.string
}

export default Expenses
