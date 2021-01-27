import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'user',
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
    },
    userLogout(state) {
      state.loading = false
      state.data = null
      state.error = null
    }
  }
})

const { fetchStarted, fetchSuccess, fetchError } = slice.actions
export const { userLogout } = slice.actions

export const userLogin = (url, payload) => async dispatch => {
  try {
    dispatch(fetchStarted())
    const response = await fetch(`${url}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const data = await response.json()
    if (data.statusCode) throw new Error('Usuário ou senha inválido(a)')

    dispatch(fetchSuccess(data))
  } catch (error) {
    dispatch(fetchError(error.message))
  }
}

export default slice.reducer
