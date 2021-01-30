import React, { useCallback } from 'react'
import { Blur, ModalWrapper, ButtonWrapper, InputModal } from '../ModalStyles'
import AddIcon from '../../../../public/modals/add.svg'
import EditIcon from '../../../../public/modals/edit.svg'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { closeEntryModal } from '../../../redux/reducers/entryModal'
import useForm from '../../../hooks/useForm'
import { setEntry } from '../../../redux/reducers/entry'
import ErrorText from '../../Helpers/Error/Error'

const EntryModal = ({ baseUrl }) => {
  const description = useForm()
  const value = useForm()
  const type = useForm()
  const { data } = useSelector(state => state.user)
  const { entry } = useSelector(state => state)
  const dispatch = useDispatch()

  const closeModal = useCallback(() => {
    dispatch(closeEntryModal())
  }, [dispatch])

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()

      dispatch(
        setEntry(`${baseUrl}/entries`, entry.method, data.jwt, {
          description: description.value,
          value: Number(value.value),
          type: type.value
        })
      )
    },
    [
      baseUrl,
      data.jwt,
      description.value,
      dispatch,
      entry.method,
      type.value,
      value.value
    ]
  )

  return (
    <Blur>
      <ModalWrapper h4mbsm onSubmit={handleSubmit}>
        <AddIcon />
        <h4>Adicionar Item</h4>
        <InputModal
          type="text"
          placeholder="Descrição..."
          margin
          value={description.value}
          onChange={description.onChange}
          onBlur={description.onBlur}
        />
        <InputModal
          type="number"
          placeholder="Valor..."
          width="10.4rem"
          margin
          value={value.value}
          onChange={value.onChange}
          onBlur={value.onBlur}
        />
        <InputModal
          as="select"
          padding="0"
          height="3.6rem"
          margin
          value={type.value}
          onChange={type.onChange}
          onBlur={type.onBlur}
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
          <button type="submit">SIM</button>
        </ButtonWrapper>
      </ModalWrapper>
    </Blur>
  )
}

export default EntryModal

EntryModal.propTypes = {
  baseUrl: PropTypes.string
}
