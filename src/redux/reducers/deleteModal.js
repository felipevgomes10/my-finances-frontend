import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'deleteModal',
  initialState: {
    open: false,
    endPoint: '',
    id: ''
  },
  reducers: {
    openDeleteModal(state) {
      state.open = true
    },
    closeDeleteModal(state) {
      state.open = false
    },
    setModalEndPoint(state, action) {
      state.endPoint = action.payload.endPoint
      state.id = action.payload.id
    }
  }
})

export const {
  openDeleteModal,
  closeDeleteModal,
  setModalEndPoint
} = slice.actions
export default slice.reducer
