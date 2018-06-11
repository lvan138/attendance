import{
    UPDATE_PROFILE,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_ERROR,
} from './constants'

export const getProfile = () => ({
    type: 'GET_PROFILE'
})

export const updateProfile=(profile)=>({
    type:UPDATE_PROFILE,
    profile
})
export const updateProfileSuccess = (profile) => ({
    type: UPDATE_PROFILE_SUCCESS,
    profile
})

export const updateProfileError = (error) => ({
    type: UPDATE_PROFILE_ERROR,
    error
})