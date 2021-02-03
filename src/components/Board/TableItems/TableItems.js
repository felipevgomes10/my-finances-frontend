import React, { useCallback } from 'react'
import { TableItemsWrapper } from './TableItemsStyles'
import Add from '../../../../public/board/add-entry.svg'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { openEntryModal } from '../../../redux/reducers/entryModal'
import { setEntryMethod } from '../../../redux/reducers/entry'

const TableItems = ({ title, first, second, third, total, children }) => {
  const dispatch = useDispatch()

  const openModal = useCallback(() => {
    dispatch(openEntryModal())
    dispatch(setEntryMethod('POST'))
  }, [dispatch])

  return (
    <>
      <TableItemsWrapper first={first} second={second} third={third}>
        <button onClick={openModal}>
          <Add />
        </button>
        <h4>{title}</h4>
        {children}
      </TableItemsWrapper>
      {total && <p>Total: R$ {total}</p>}
    </>
  )
}

export default TableItems

TableItems.propTypes = {
  title: PropTypes.string,
  first: PropTypes.bool,
  second: PropTypes.bool,
  third: PropTypes.bool,
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.any
}
