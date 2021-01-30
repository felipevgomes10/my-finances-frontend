import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BudgetWrapper } from './BudgetStyles'
import Add from '../../../../public/board/add-entry.svg'
import Edit from '../../../../public/board/edit-gray.svg'
import Remove from '../../../../public/board/delete-gray.svg'
import { openBudgetModal } from '../../../redux/reducers/budgetModal'
import { setBudgetMethod } from '../../../redux/reducers/budget'
import { openDeleteModal } from '../../../redux/reducers/deleteModal'

const Budget = () => {
  const [totalEarned, setTotalEarned] = useState()
  const [totalExpensed, setTotalExpensed] = useState()
  const [totalRemaining, setTotaltotalRemaining] = useState()
  const { data } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    const earnings = data.user.entries.filter(entry => entry.type === 'earning')
    const total = earnings.reduce((acc, earning) => {
      return acc + earning.value
    }, 0)
    setTotalEarned(total)
  }, [data.user.entries])

  useEffect(() => {
    const expenses = data.user.entries.filter(entry => entry.type === 'expense')
    const total = expenses.reduce((acc, expense) => {
      return acc + expense.value
    }, 0)
    setTotalExpensed(total)
  }, [data.user.entries])

  useEffect(() => {
    if (totalEarned || totalExpensed) {
      const value = data.user.budget.value + totalEarned - totalExpensed
      setTotaltotalRemaining(parseFloat(value.toFixed(2)))
    }
  }, [data.user.budget.value, totalEarned, totalExpensed])

  const openModalToPostOrPut = useCallback(
    method => {
      dispatch(openBudgetModal())
      dispatch(setBudgetMethod(method))
    },
    [dispatch]
  )

  const openModalToDelete = useCallback(() => {
    dispatch(openDeleteModal())
    dispatch(setBudgetMethod('DELETE'))
  }, [dispatch])

  if (!data.user.budget) {
    return (
      <BudgetWrapper addNew>
        <h4>Adicione um orçamento aqui</h4>
        <button onClick={() => openModalToPostOrPut('POST')}>
          <Add />
        </button>
      </BudgetWrapper>
    )
  }
  return (
    <BudgetWrapper red={totalRemaining <= 0}>
      <p>
        Orçamento: <span>R$ {data.user.budget.value}</span>
      </p>
      <p>
        Restante:{' '}
        <span>{totalRemaining ? `R$ ${totalRemaining}` : 'Sem entradas'}</span>
      </p>
      <p>
        Ganhos:{' '}
        <span>{totalEarned ? `+ R$ ${totalEarned}` : 'Sem entradas'}</span>
      </p>
      <p>
        Gastos:{' '}
        <span>{totalExpensed ? `- R$ ${totalExpensed}` : 'Sem entradas'}</span>
      </p>
      <div>
        <button onClick={() => openModalToPostOrPut('PUT')}>
          <Edit />
        </button>
        <button onClick={openModalToDelete}>
          <Remove />
        </button>
      </div>
    </BudgetWrapper>
  )
}

export default Budget
