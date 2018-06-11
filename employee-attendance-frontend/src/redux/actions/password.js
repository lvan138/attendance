import{
    UPDATE_PASSWORD,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_ERROR,
} from './constants'


export const updatePassword=(password)=>({
    type:UPDATE_PASSWORD,
    password
})
export const updatePasswordSuccess = (password) => ({
    type: UPDATE_PASSWORD_SUCCESS,
    password
})

export const updatePasswordError = (error) => ({
    type: UPDATE_PASSWORD_ERROR,
    error
})