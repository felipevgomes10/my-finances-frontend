import {
  getDefaultMiddleware,
  combineReducers,
  configureStore
} from '@reduxjs/toolkit'
import user from './reducers/user'
import budgetModal from './reducers/budgetModal'
import budget from './reducers/budget'

const middleware = [...getDefaultMiddleware()]
const reducer = combineReducers({ user, budgetModal, budget })
const store = configureStore({ reducer, middleware })

export default store
