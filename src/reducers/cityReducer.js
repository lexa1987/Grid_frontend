import { GET_CITY, CHANGE_CHECKED_CITY} from '../actions/types';

export default function educationReducer(state = [], action) {
  switch (action.type) {
    case GET_CITY:
      const arr = action.payload.map(city => {
        return {...city, ...{checked: true}};
      });
      return [...state, ...arr];
    case CHANGE_CHECKED_CITY:
      return state.map(city => {
        if (city.name === action.payload) {city.checked = !city.checked};
        return city;
      });
    default:
      return state
  }
}