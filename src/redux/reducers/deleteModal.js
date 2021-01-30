import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'deleteModal',
  initialState: {
    open: false
  },
  reducers: {
    openDeleteModal(state) {
      state.open = true
    },
    closeDeleteModal(state) {
      state.open = false
    }
  }
})

export const { openDeleteModal, closeDeleteModal } = slice.actions
export default slice.reducer
