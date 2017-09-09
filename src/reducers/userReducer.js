import { GET_USERS, CHANGE_CHECKED_USER } from '../actions/types';

export default function userReducer(state = [], action) {
  switch (action.type) {
    case GET_USERS:
      const arr = action.payload.map(user => {
        return {...user, ...{checked: true}};
      });
      return [...state, ...arr];
    case CHANGE_CHECKED_USER:
      return state.map(user => {
        if (user.id === action.payload) {user.checked = !user.checked};
        return user;
      });
    default:
      return state
  }
}