import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'budgetModal',
  initialState: {
    open: false
  },
  reducers: {
    openBudgetModal(state) {
      state.open = true
    },
    closeBudgetModal(state) {
      state.open = false
    }
  }
})

export const { openBudgetModal, closeBudgetModal } = slice.actions
export default slice.reducer
