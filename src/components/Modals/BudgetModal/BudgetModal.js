import React, { useCallback } from 'react'
import { Blur, ButtonWrapper, InputModal, ModalWrapper } from '../ModalStyles'
import AddIcon from '../../../../public/modals/add.svg'
import EditIcon from '../../../../public/modals/edit.svg'
import useForm from '../../../hooks/useForm'
import ErrorText from '../../Helpers/Error/Error'
import { useDispatch, useSelector } from 'react-redux'
import { closeBudgetModal } from '../../../redux/reducers/budgetModal'
import { createBudget } from '../../../redux/reducers/budget'
import PropTypes from 'prop-types'

const BudgetModal = ({ baseUrl }) => {
  const { value, error, onChange, onBlur, validate } = useForm()
  const { user } = useSelector(state => state)
  const { budget } = useSelector(state => state)
  const dispatch = useDispatch()
  const url =
    budget.method === 'POST'
      ? `${baseUrl}/budgets`
      : `${baseUrl}/budgets/${user.data.user.id}`

  const closeModal = useCallback(() => {
    dispatch(closeBudgetModal())
  }, [dispatch])

  const handleSumbit = useCallback(
    e => {
      e.preventDefault()
      if (validate()) {
        dispatch(
          createBudget(url, budget.method, user.data.jwt, {
            value: Number(value)
          })
        )
      }
    },
    [validate, dispatch, user.data.jwt, value, budget.method, url]
  )

  return (
    <Blur>
      <ModalWrapper onSubmit={handleSumbit}>
        {budget.method === 'POST' ? <AddIcon /> : <EditIcon />}
        <h4>{budget.method === 'POST' ? 'Adicionar item' : 'Editar item'}</h4>
        <InputModal
          type="number"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder="Valor..."
        />
        {error && <ErrorText>{error}</ErrorText>}
        {budget.error && <ErrorText>{budget.error}</ErrorText>}
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
