import {  
    LOGIN_REQUESTING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
} from './constants'
  
import axios from 'axios'
import createHistory from 'history/createBrowserHistory'

const ROOT_URL = 'http://127.0.0.1:8000';

// export function loginRequest({email,password}){
//   return (dispatch) => {
//       const history = createHistory();
//       axios.post(`${ROOT_URL}/api/login`,{email,password})
//           .then(response => {
//             if(response.error) {
//               dispatch(loginError(response.error));
//             } else {
//               console.log(response)
//               console.log(JSON.stringify(response.json()))
//               dispatch(loginSuccess(response.data.token));
//               localStorage.setItem('token',response.data.token);
//              // history.push('/');
//              // history.go('/');   
//             }                       
//           })
//           .catch(()=>{
//               dispatch(loginError("Empty Required Field"));
//           });
//   }
// }
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