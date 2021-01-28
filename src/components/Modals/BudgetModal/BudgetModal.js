import React, { useCallback } from 'react'
import { Blur, ButtonWrapper, InputModal, ModalWrapper } from '../ModalStyles'
import AddIcon from '../../../../public/modals/add.svg'
import useForm from '../../../hooks/useForm'
import ErrorText from '../../Helpers/Error/Error'
import { useDispatch, useSelector } from 'react-redux'
import { closeBudgetModal } from '../../../redux/reducers/budgetModal'
import { createBudget } from '../../../redux/reducers/budget'
import PropTypes from 'prop-types'

const BudgetModal = ({ baseUrl }) => {
  const { value, error, onChange, onBlur, validate } = useForm()
  const { user } = useSelector(state => state)
  const dispatch = useDispatch()

  const closeModal = useCallback(() => {
    dispatch(closeBudgetModal())
  }, [dispatch])

  const handleSumbit = useCallback(
    e => {
      e.preventDefault()
      if (validate()) {
        dispatch(createBudget(baseUrl, user.data.jwt, { value: Number(value) }))
      }
    },
    [validate, baseUrl, dispatch, user.data.jwt, value]
  )

  return (
    <Blur>
      <ModalWrapper onSubmit={handleSumbit}>
        <AddIcon />
        <h4>Adicionar item</h4>
        <InputModal
          type="number"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder="Valor..."
        />
        {error && <ErrorText>{error}</ErrorText>}
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

export default BudgetModal

BudgetModal.propTypes = {
  baseUrl: PropTypes.string
}
