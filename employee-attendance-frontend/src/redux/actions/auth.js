import {  
    LOGIN_REQUESTING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
} from './constants'
  
import axios from 'axios'
import createHistory from 'history/createBrowserHistory'

const ROOT_URL = 'http://127.0.0.1:8000';

export const loginRequest = ({email, password}) => ({
  type: LOGIN_REQUESTING,
  email,
  password
})

export const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  token
}) 

export const loginError = error => ({
  type: LOGIN_ERROR,
  error
})