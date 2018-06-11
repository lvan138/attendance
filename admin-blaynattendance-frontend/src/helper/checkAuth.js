import { setClient } from '../redux/actions/client';
import jwtDecode from 'jwt-decode';
import { CLIENT_SET } from '../redux/actions/constants';

export function checkAuthorization (dispatch) {  
    // attempt to grab the token from localstorage
    const token = localStorage.getItem('token')
    const currentUser = localStorage.getItem('user')
    // if it exists
    if (token) {
      // parse it down into an object
      //  const token = JSON.parse(storedToken)
        const jwt = jwtDecode(token);
        const user = JSON.parse(currentUser)
      // this just all works to compare the total seconds of the created
      // time of the token vs the ttl (time to live) seconds
    //   const createdDate = new Date(token.created)
    //   const created = Math.round(createdDate.getTime() / 1000)
    //   const ttl = 1209600
    //   const expiry = created + ttl
        const current_time = Date.now() / 1000;
  
      // if the token has expired return false
      //if (created > expiry) return false
        if (current_time > jwt.exp) return false
  
      // otherwise, dispatch the token to our setClient action
      // which will update our redux state with the token and return true
      dispatch({type: CLIENT_SET, token: token, user: user})
      return true
    }
  
    return false
  }
  
  // export function checkIndexAuthorization ({ dispatch }) {  
  //   // by having a function that returns a function we satisfy 2 goals:
  //   //
  //   // 1. grab access to our Redux Store and thus Dispatch to call actions
  //   // 2. Return a function that includes all the proper .. properties that
  //   //    React Router expects for us to include and use
  //   //
  //   // `nextState` - the next "route" we're navigating to in the router
  //   // `replace` - a helper to change the route
  //   // `next` - what we call when we're done messing around
  //   //
  //   return (nextState, replace, next) => {
  //     // we'll make this in a minute - remember begin with the end!
  //     // If we pass the authentication check, go to widgets
  //     if (checkAuthorization(dispatch)) {
  //       replace('widgets')
  
  //       return next()
  //     }
  
  //     // Otherwise let's take them to login!
  //     replace('login')
  //     return next()
  //   }
  // }
  
  export function checkWidgetAuthorization ({ dispatch, getState }) {  
    // Same format - we do this to have the Redux State available.
    // The difference is that this time we also pull in the helper
    // `getState` which will allow us to.....
    // ....
    // get the state.
    //
    return (nextState, replace, next) => {
      // reference to the `client` piece of state
      const client = getState().client
  
      // is it defined and does it have a token? good, go ahead to widgets
      if (client && client.token) return next()
  
      // not set yet?  Let's try and set it and if so, go ahead to widgets
      if (checkAuthorization(dispatch)) return next()
  
      // nope?  okay back to login ya go.
     // replace('login')
      console.log('not login')
      return next()
    }
  }