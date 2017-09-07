import { GET_GRID } from '../actions/types';

export default function authReducer(state = [], action) {
  switch (action.type) {
    case GET_GRID:
      return [...state, ...action.payload]
    default:
      return state
  }
}