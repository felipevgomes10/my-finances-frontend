import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from './user'

const slice = createSlice({
  name: 'createUser',
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

export const createNewUser = (url, payload) => async dispatch => {
  try {
    dispatch(fetchStarted())

    const response = await fetch(`${url}/auth/local/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const data = await response.json()
    if (data.statusCode) throw new Error('Usuário/Email já existe')

    dispatch(fetchSuccess())
    dispatch(
      userLogin(`${url}`, {
        identifier: payload.email,
        password: payload.password
      })
    )
  } catch (error) {
    dispatch(fetchError(error.message))
  }
}

export default slice.reducer
