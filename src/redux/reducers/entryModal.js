import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'entryModal',
  initialState: {
    open: false
  },
  reducers: {
    openEntryModal(state) {
      state.open = true
    },
    closeEntryModal(state) {
      state.open = false
    }
  }
})

export const { openEntryModal, closeEntryModal } = slice.actions
export default slice.reducer
