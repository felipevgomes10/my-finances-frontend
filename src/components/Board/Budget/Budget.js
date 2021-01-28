import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BudgetWrapper } from './BudgetStyles'
import Add from '../../../../public/board/add-entry.svg'
import { openBudgetModal } from '../../../redux/reducers/budgetModal'

const Budget = () => {
  const { data } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const openModal = useCallback(() => {
    dispatch(openBudgetModal())
  }, [dispatch])

  if (!data.user.budget) {
    return (
      <BudgetWrapper addNew>
        <h4>Adicione um orçamento aqui</h4>
        <button onClick={openModal}>
          <Add />
        </button>
      </BudgetWrapper>
    )
  }
  return <div>Tem budget</div>
}

export default Budget
