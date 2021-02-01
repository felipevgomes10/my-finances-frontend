import {
  getDefaultMiddleware,
  combineReducers,
  configureStore
} from '@reduxjs/toolkit'
import user from './reducers/user'
import budgetModal from './reducers/budgetModal'
import budget from './reducers/budget'
import deleteModal from './reducers/deleteModal'
import entryModal from './reducers/entryModal'
import entry from './reducers/entry'
import createUser from './reducers/createUser'

const middleware = [...getDefaultMiddleware()]
const reducer = combineReducers({
  user,
  budgetModal,
  budget,
  deleteModal,
  entryModal,
  entry,
  createUser
})
const store = configureStore({ reducer, middleware })

export default store
