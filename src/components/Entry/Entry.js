import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { EntryWrapper, EntryButtonsWrapper } from './EntryStyles'
import EditIcon from '../../../public/board/edit-gray.svg'
import DeleteIcon from '../../../public/board/delete-gray.svg'
import { useDispatch } from 'react-redux'
import {
  openDeleteModal,
  setModalEndPoint
} from '../../redux/reducers/deleteModal'
import { setEntryMethod } from '../../redux/reducers/entry'
import {
  openEntryModal,
  setEntryModalValues
} from '../../redux/reducers/entryModal'

const Entry = ({ id, description, value, type }) => {
  const dispatch = useDispatch()

  const handleEntryUpdate = useCallback(() => {
    dispatch(openEntryModal())
    dispatch(setEntryMethod('PUT'))
    dispatch(
      setEntryModalValues({ id: id.toString(), description, value, type })
    )
  }, [description, dispatch, id, type, value])

  const handleEntryDelete = useCallback(() => {
    dispatch(openDeleteModal())
    dispatch(setEntryMethod('DELETE'))
    dispatch(setModalEndPoint({ id: id.toString(), endPoint: 'entries' }))
  }, [dispatch, id])

  return (
    <EntryWrapper red={type === 'expense'}>
      <span>{description}</span>
      <span>
        {type === 'expense' ? '- R$' : '+ R$'} {value}
      </span>
      <EntryButtonsWrapper>
        <button onClick={handleEntryUpdate}>
          <EditIcon />
        </button>
        <button onClick={handleEntryDelete}>
          <DeleteIcon />
        </button>
      </EntryButtonsWrapper>
    </EntryWrapper>
  )
}

export default Entry

Entry.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  description: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string
}
