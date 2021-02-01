import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import TableItems from '../../components/Board/TableItems/TableItems'
import Entry from '../../components/Entry/Entry'
import earnings from '../../redux/filters/earnings'
import EntryModal from '../../components/Modals/EntryModal/EntryModal'
import PropTypes from 'prop-types'
import DeleteModal from '../../components/Modals/DeleteModal/DeleteModal'

const Earnings = ({ baseUrl }) => {
  const { user } = useSelector(state => state)

  const { entryModal } = useSelector(state => state)
  const { deleteModal } = useSelector(state => state)

  const router = useRouter()

  const userEarnings = useSelector(earnings)

  useEffect(() => {
    if (!user.data) {
      router.push('/entrar')
    }
  }, [router, user.data])

  if (!user.data) return null
  return (
    <div>
      <TableItems title="Ganhos">
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
