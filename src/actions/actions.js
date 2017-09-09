import axios from 'axios'

import { 
  GET_USERS, 
  GET_GRID, 
  GET_CITY, 
  GET_DEGREE,
  CHANGE_CHECKED_USER, 
  CHANGE_CHECKED_DEGREE, 
  CHANGE_CHECKED_CITY 
} from './types';

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

export function getDegree() {
  return function(dispatch) {
    const request = axios.get(`${ROOT_URL}/education/unique`)
    request
      .then(response => {
        dispatch({type: GET_DEGREE, payload: response.data});
      })
  }
}

export function getCity() {
  return function(dispatch) {
    const request = axios.get(`${ROOT_URL}/city/unique`)
    request
      .then(response => {
        dispatch({type: GET_CITY, payload: response.data});
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
    const request = axios.get(`${ROOT_URL}/grid/update`, {
      params: {
        scope: {
          users:state.users.filter(user => {
            return user.checked===true
          }),
          education:state.education.filter(edu => {
            return edu.checked===true
          }),
          city:state.city.filter(c => {
            return c.checked===true
          }),
        }
      }
    });
    request
      .then(response => {
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

export function changeCheckedDegree(degree) {
  return {
    type: CHANGE_CHECKED_DEGREE, 
    payload: degree
  }
}

export function changeCheckedCity(city) {
  return {
    type: CHANGE_CHECKED_CITY, 
    payload: city
  }
}