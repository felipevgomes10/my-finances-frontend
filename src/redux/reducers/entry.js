import { createSlice } from '@reduxjs/toolkit'
import { closeEntryModal } from './entryModal'
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
    }
  }
})

const { fetchStarted, fetchSuccess, fetchError } = slice.actions
export const { setEntryMethod } = slice.actions

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

    const { entry, user } = getState()

    if (entry.method === 'POST') {
      const newEntries = [...user.data.user.entries, data]
      dispatch(getEntries(newEntries))
      dispatch(closeEntryModal())
    }
  } catch (error) {
    dispatch(fetchError(error.message))
  }
}

export default slice.reducer
