import { GET_USERS } from '../actions/types';

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return [...state, ...action.payload]
    default:
      return state
  }
}