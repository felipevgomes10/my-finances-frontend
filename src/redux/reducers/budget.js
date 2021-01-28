import { createSlice } from '@reduxjs/toolkit'
import { closeBudgetModal } from './budgetModal'
import { getBudget } from './user'

const slice = createSlice({
  name: 'budget',
  initialState: {
    loading: false,
    data: null,
    error: null
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
    }
  }
})

const { fetchStarted, fetchSuccess, fetchError } = slice.actions

export const createBudget = (url, token, payload) => async dispatch => {
  try {
    dispatch(fetchStarted())
    const response = await fetch(`${url}/budgets`, {
      method: 'POST',
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
    dispatch(getBudget(data))
    dispatch(closeBudgetModal())
  } catch (error) {
    dispatch(fetchError(error.message))
  }
}

export default slice.reducer
