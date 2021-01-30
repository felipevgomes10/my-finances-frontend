import React, { useCallback } from 'react'
import { Blur, ButtonWrapper, ModalWrapper } from '../ModalStyles'
import Delete from '../../../../public/modals/delete.svg'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { closeDeleteModal } from '../../../redux/reducers/deleteModal'
import { createBudget } from '../../../redux/reducers/budget'

const DeleteModal = ({ baseUrl }) => {
  const { budget } = useSelector(state => state)
  const { data } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const closeModal = useCallback(() => {
    dispatch(closeDeleteModal())
  }, [dispatch])

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      dispatch(
        createBudget(
          `${baseUrl}/budgets/${data.user.id}`,
          budget.method,
          data.jwt
        )
      )
    },
    [dispatch, baseUrl, data.user.id, budget.method, data.jwt]
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
