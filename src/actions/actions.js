import axios from 'axios'
import { GET_USERS, GET_GRID } from './types';
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

export function getGridData() {
  return function(dispatch) {
    const request = axios.get(`${ROOT_URL}/grid`)
    request
      .then(response => {
        dispatch({type: GET_GRID, payload: response.data});
      })
  }
}