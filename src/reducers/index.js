import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import userReducer from './userReducer';

const rootReducer = combineReducers({
  form,
  users: userReducer
})

export default rootReducer