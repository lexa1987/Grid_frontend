import { combineReducers } from 'redux'
import userReducer from './userReducer'
import educationReducer from './educationReducer'
import cityReducer from './cityReducer';
import gridReducer from './gridReducer'
import 'bootstrap/dist/css/bootstrap.css'

const rootReducer = combineReducers({
  users: userReducer,
  education: educationReducer,
  city: cityReducer,
  grid: gridReducer
})

export default rootReducer