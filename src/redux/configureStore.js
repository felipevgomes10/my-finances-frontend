import {
  getDefaultMiddleware,
  combineReducers,
  configureStore
} from '@reduxjs/toolkit'
import user from './reducers/user'

const middleware = [...getDefaultMiddleware()]
const reducer = combineReducers({ user })
const store = configureStore({ reducer, middleware })

export default store
