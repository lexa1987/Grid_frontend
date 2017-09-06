import axios from 'axios'
import { GET_USERS } from './types';
const ROOT_URL = 'http://grid/backend/web'

export function getUsersList() {
  return function(dispatch) {
    const request = axios.get(`${ROOT_URL}/users`)
    request
      .then(response => {
        dispatch({type: GET_USERS, payload: response.data});
      })
  }
}