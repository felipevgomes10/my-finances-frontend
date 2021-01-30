import { createSlice } from '@reduxjs/toolkit'
import { closeBudgetModal } from './budgetModal'
import { closeDeleteModal } from './deleteModal'
import { getBudget } from './user'

const slice = createSlice({
  name: 'budget',
  initialState: {
    loading: false,
    data: null,
    error: null,
    method: ''
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true
    },
    fetchSuccess(state, action) {
      state.loading = false
      state.data = action.payload
      state.error = null
    },
    fetchError(state, action) {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    setBudgetMethod(state, action) {
      state.method = action.payload
    }
  }
})

const { fetchStarted, fetchSuccess, fetchError } = slice.actions
export const { setBudgetMethod } = slice.actions

export const createBudget = (url, method, token, payload) => async (
  dispatch,
  getState
) => {
  try {
    dispatch(fetchStarted())
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    })

    const data = await response.json()
    if (data.statusCode) {
      throw new Error('Chamada inválida ou usuário já possui um orçamento')
    }

    dispatch(fetchSuccess(data))

    const { budget } = getState()

    if (budget.method === 'POST' || budget.method === 'PUT') {
      dispatch(getBudget(data))
      dispatch(closeBudgetModal())
    } else {
      dispatch(getBudget(null))
      dispatch(closeDeleteModal())
    }
  } catch (error) {
    dispatch(fetchError(error.message))
  }
}

export default slice.reducer
