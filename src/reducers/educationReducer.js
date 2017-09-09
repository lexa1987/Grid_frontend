import { GET_DEGREE, CHANGE_CHECKED_DEGREE } from '../actions/types';

export default function educationReducer(state = [], action) {
  switch (action.type) {
    case GET_DEGREE:
      const arr = action.payload.map(edu => {
        return {...edu, ...{checked: true}};
      });
      return [...state, ...arr];
    case CHANGE_CHECKED_DEGREE:
      return state.map(edu => {
        if (edu.degree === action.payload) {edu.checked = !edu.checked};
        return edu;
      });
    default:
      return state
  }
}