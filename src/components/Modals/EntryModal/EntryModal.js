import React, { useCallback } from 'react'
import { Blur, ModalWrapper, ButtonWrapper, InputModal } from '../ModalStyles'
import AddIcon from '../../../../public/modals/add.svg'
import EditIcon from '../../../../public/modals/edit.svg'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeEntryModal,
  resetEntryModalValues,
  setEntryModalValues
} from '../../../redux/reducers/entryModal'
import { resetError, setEntry } from '../../../redux/reducers/entry'
import ErrorText from '../../Helpers/Error/Error'

const EntryModal = ({ baseUrl }) => {
  const { data } = useSelector(state => state.user)
  const { entry } = useSelector(state => state)
  const { entryModal } = useSelector(state => state)

  const dispatch = useDispatch()

  const url =
    entry.method === 'POST'
      ? `${baseUrl}/entries`
      : `${baseUrl}/entries/${entryModal.id}`

  const closeModal = useCallback(() => {
    dispatch(closeEntryModal())
    dispatch(resetError())
    dispatch(resetEntryModalValues())
  }, [dispatch])

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()

      dispatch(
        setEntry(url, entry.method, data.jwt, {
          description: entryModal.description.toLowerCase(),
          value: Number(entryModal.value),
          type: entryModal.type
        })
      )
    },
    [
      data.jwt,
      dispatch,
      entry.method,
      entryModal.description,
      entryModal.type,
      entryModal.value,
      url
    ]
  )

  return (
    <Blur>
      <ModalWrapper h4mbsm onSubmit={handleSubmit}>
        {entry.method === 'POST' ? <AddIcon /> : <EditIcon />}
        <h4>{entry.method === 'POST' ? 'Adicionar Item' : 'Editar Item'}</h4>
        <InputModal
          type="text"
          maxLength="12"
          placeholder="Descrição..."
          margin
          value={entryModal.description}
          onChange={({ target }) =>
            dispatch(
              setEntryModalValues({ ...entryModal, description: target.value })
            )
          }
        />
        <InputModal
          type="number"
          placeholder="Valor..."
          width="10.4rem"
          margin
          value={entryModal.value}
          onChange={({ target }) =>
            dispatch(
              setEntryModalValues({ ...entryModal, value: target.value })
            )
          }
        />
        <InputModal
          as="select"
          padding="0 0 0 1.6rem"
          height="3.6rem"
          margin
          value={entryModal.type}
          onChange={({ target }) =>
            dispatch(setEntryModalValues({ ...entryModal, type: target.value }))
          }
        >
          <option value="" disabled>
            Escolha um valor
          </option>
          <option value="earning">Ganho</option>
          <option value="expense">Gasto</option>
        </InputModal>
        {entry.error && <ErrorText>{entry.error}</ErrorText>}
        <ButtonWrapper mt>
          <button type="button" onClick={closeModal}>
            NÃO
          </button>
          {entry.loading ? (
            <button disabled>
              <span></span>
            </button>
          ) : (
            <button type="submit">SIM</button>
          )}
        </ButtonWrapper>
      </ModalWrapper>
    </Blur>
  )
}

export default EntryModal

EntryModal.propTypes = {
  baseUrl: PropTypes.string
}
