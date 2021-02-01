import { createSlice } from '@reduxjs/toolkit'
import { closeDeleteModal } from './deleteModal'
import { closeEntryModal, resetEntryModalValues } from './entryModal'
import { getEntries } from './user'

const slice = createSlice({
  name: 'entry',
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
    setEntryMethod(state, action) {
      state.method = action.payload
    },
    resetError(state) {
      state.error = null
    }
  }
})

const { fetchStarted, fetchSuccess, fetchError } = slice.actions
export const { setEntryMethod, resetError } = slice.actions

export const setEntry = (url, method, token, payload) => async (
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
    if (data.statusCode) throw new Error('Algo errado, tente novamente')

    dispatch(fetchSuccess(data))
    dispatch(resetEntryModalValues())

    const { entry, user } = getState()

    if (entry.method === 'POST') {
      const newEntries = [...user.data.user.entries, data]
      dispatch(getEntries(newEntries))
      dispatch(closeEntryModal())
    } else if (entry.method === 'DELETE') {
      const newEntries = user.data.user.entries.filter(
        entry => entry.id !== data.id
      )
      dispatch(getEntries(newEntries))
      dispatch(closeDeleteModal())
    } else {
      const newEntries = user.data.user.entries.map(entry => {
        if (entry.id === data.id) {
          return { ...data }
        }
        return entry
      })
      dispatch(getEntries(newEntries))
      dispatch(closeEntryModal())
    }
  } catch (error) {
    dispatch(fetchError(error.message))
  }
}

export default slice.reducer
