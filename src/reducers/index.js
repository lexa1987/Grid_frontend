import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import userReducer from './userReducer'
import gridReducer from './gridReducer'
import 'bootstrap/dist/css/bootstrap.css'

const rootReducer = combineReducers({
  form,
  users: userReducer,
  grid: gridReducer
})

export default rootReducer