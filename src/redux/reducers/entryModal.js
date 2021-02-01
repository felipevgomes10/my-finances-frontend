import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'entryModal',
  initialState: {
    open: false,
    id: '',
    description: '',
    value: '',
    type: ''
  },
  reducers: {
    openEntryModal(state) {
      state.open = true
    },
    closeEntryModal(state) {
      state.open = false
    },
    setEntryModalValues(state, action) {
      state.id = action.payload.id
      state.description = action.payload.description
      state.value = action.payload.value
      state.type = action.payload.type
    },
    resetEntryModalValues(state) {
      state.id = ''
      state.description = ''
      state.value = ''
      state.type = ''
    }
  }
})

export const {
  openEntryModal,
  closeEntryModal,
  setEntryModalValues,
  resetEntryModalValues
} = slice.actions
export default slice.reducer
