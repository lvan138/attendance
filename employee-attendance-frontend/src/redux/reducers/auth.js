import {  
    LOGIN_REQUESTING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
  } from '../actions/constants'
  
  const initialState = {
    requesting: false,
    isAuthenticated: false,
    errors: []
  }
  
  const auth = (state = initialState, action) => {  
    switch (action.type) {
      // Set the requesting flag and append a message to be shown
      case LOGIN_REQUESTING:
        return  Object.assign({}, state, {
          requesting: true,
          isAuthenticated: false,
        })
  
  
      // Successful?  Reset the login state.
      case LOGIN_SUCCESS:
        return Object.assign({}, state, {
          requesting: false,
          isAuthenticated: true,
        })
  
      // Append the error returned from our api
      // set the success and requesting flags to false
      case LOGIN_ERROR:
        return Object.assign({}, state, {
          requesting: false,
          errors: action.error
        })
  
      default:
        return state
    }
  }
  
  export default auth  