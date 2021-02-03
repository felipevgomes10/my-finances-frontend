import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import TableItems from '../../components/Board/TableItems/TableItems'
import Entry from '../../components/Entry/Entry'
import earnings from '../../redux/filters/earnings'
import EntryModal from '../../components/Modals/EntryModal/EntryModal'
import PropTypes from 'prop-types'
import DeleteModal from '../../components/Modals/DeleteModal/DeleteModal'
import PageHead from '../../components/Head'

const Earnings = ({ baseUrl }) => {
  const { user } = useSelector(state => state)

  const { entryModal } = useSelector(state => state)
  const { deleteModal } = useSelector(state => state)

  const router = useRouter()

  const userEarnings = useSelector(earnings)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (!user.data) {
      router.push('/entrar')
    }
  }, [router, user.data])

  useEffect(() => {
    const total = userEarnings?.reduce((acc, item) => {
      return acc + item.value
    }, 0)
    setTotal(total)
  }, [userEarnings])

  if (!user.data) return null
  return (
    <>
      <PageHead title="Ganhos | My Finances" />
      <div>
        <TableItems title="Ganhos" total={total}>
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
        {entryModal.open && <EntryModal baseUrl={baseUrl} />}
        {deleteModal.open && <DeleteModal baseUrl={baseUrl} />}
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

export default Earnings

Earnings.propTypes = {
  baseUrl: PropTypes.string
}
