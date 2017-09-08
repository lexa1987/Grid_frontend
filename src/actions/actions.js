import axios from 'axios'
import { GET_USERS, GET_GRID, CHANGE_CHECKED_USER } from './types';
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

export function updateGridData(state) {
  return function(dispatch) {
    console.log(state);
    const request = axios.get(`${ROOT_URL}/grid/update`, {
      params: {
        scope: {
          users:state.users.filter(user => {
            return user.checked===true
          })
        }
      }
    })
    console.log({users:state.users.filter(user => {
          return user.checked===true
      })
    });
    request
      .then(response => {
        console.log(response.data);
        dispatch({type: GET_GRID, payload: response.data});
      })
  }
}

export function changeCheckedUser(userId) {
  return {
    type: CHANGE_CHECKED_USER, 
    payload: userId
  }
}