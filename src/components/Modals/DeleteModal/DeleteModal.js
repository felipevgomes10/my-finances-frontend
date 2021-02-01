import React, { useCallback } from 'react'
import { Blur, ButtonWrapper, ModalWrapper } from '../ModalStyles'
import Delete from '../../../../public/modals/delete.svg'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { closeDeleteModal } from '../../../redux/reducers/deleteModal'
import { createBudget } from '../../../redux/reducers/budget'
import { setEntry } from '../../../redux/reducers/entry'

const DeleteModal = ({ baseUrl }) => {
  const { budget } = useSelector(state => state)
  const { entry } = useSelector(state => state)
  const { deleteModal } = useSelector(state => state)
  const { data } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const closeModal = useCallback(() => {
    dispatch(closeDeleteModal())
  }, [dispatch])

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      if (deleteModal.endPoint === 'budget') {
        dispatch(
          createBudget(
            `${baseUrl}/budgets/${deleteModal.id}`,
            budget.method,
            data.jwt
          )
        )
      } else {
        dispatch(
          setEntry(
            `${baseUrl}/entries/${deleteModal.id}`,
            entry.method,
            data.jwt
          )
        )
      }
    },
    [
      deleteModal.endPoint,
      deleteModal.id,
      dispatch,
      baseUrl,
      budget.method,
      data.jwt,
      entry.method
    ]
  )

  return (
    <Blur>
      <ModalWrapper h4mb onSubmit={handleSubmit}>
        <Delete />
        <h4>Tem certeza que deseja excluir esse item?</h4>
        <ButtonWrapper>
          <button type="button" onClick={closeModal}>
            NÃO
          </button>
          <button type="submit">SIM</button>
        </ButtonWrapper>
      </ModalWrapper>
    </Blur>
  )
}

export default DeleteModal

DeleteModal.propTypes = {
  baseUrl: PropTypes.string
}
