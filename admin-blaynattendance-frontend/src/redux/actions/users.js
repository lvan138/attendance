import {
    GET_USER,
    GET_USER_ERROR,
    GET_USER_SUCCESS,
    CREATE_USER,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR,
} from './constants'

export const getUser = (today) => ({
    type: GET_USER,
    today
})

export const getUserSuccess = (users) => ({
    type: GET_USER_SUCCESS,
    users
})

export const getUserError = (error) => ({
    type: GET_USER_ERROR,
    error
})

export const createUser = (user) => ({
    type: CREATE_USER,
    user
})

export const createUserSuccess = (user) => ({
    type: CREATE_USER_SUCCESS,
    user
})

export const createUserError = (error) => ({
    type: CREATE_USER_ERROR,
    error
})

export const deleteUser = id => ({
    type: DELETE_USER,
    id
})

export const deleteUserSuccess = id => ({
    type: DELETE_USER_SUCCESS,
    id
})

export const deleteUserError = (error) => ({
    type: DELETE_USER_ERROR,
    error
})

export const updateUser = (user) => ({
    type: UPDATE_USER,
    user
})

export const updateUserSuccess = (user) => ({
    type: UPDATE_USER_SUCCESS,
    user
})

export const updateUserError = (error) => ({
    type: UPDATE_USER_ERROR,
    error
})