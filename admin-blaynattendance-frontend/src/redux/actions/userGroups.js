import {
    GET_USER_GROUP,
    GET_USER_GROUP_ERROR,
    GET_USER_GROUP_SUCCESS,
    CREATE_USER_GROUP,
    CREATE_USER_GROUP_SUCCESS,
    CREATE_USER_GROUP_ERROR,
    UPDATE_USER_GROUP,
    UPDATE_USER_GROUP_SUCCESS,
    UPDATE_USER_GROUP_ERROR,
    DELETE_USER_GROUP,
    DELETE_USER_GROUP_SUCCESS,
    DELETE_USER_GROUP_ERROR,
} from './constants'

export const getUserGroup = () => ({
    type: GET_USER_GROUP
})

export const getUserGroupSuccess = (userGroups) => ({
    type: GET_USER_GROUP_SUCCESS,
    userGroups
})

export const getUserGroupError = (error) => ({
    type: GET_USER_GROUP_ERROR,
    error
})

export const createUserGroup = (userGroup) => ({
    type: CREATE_USER_GROUP,
    userGroup
})

export const createUserGroupSuccess = (userGroup) => ({
    type: CREATE_USER_GROUP_SUCCESS,
    userGroup
})

export const createUserGroupError = (error) => ({
    type: CREATE_USER_GROUP_ERROR,
    error
})

export const deleteUserGroup = id => ({
    type: DELETE_USER_GROUP,
    id
})

export const deleteUserGroupSuccess = id => ({
    type: DELETE_USER_GROUP_SUCCESS,
    id
})

export const deleteUserGroupError = (error) => ({
    type: DELETE_USER_GROUP_ERROR,
    error
})

export const updateUserGroup = (userGroup) => ({
    type: UPDATE_USER_GROUP,
    userGroup
})

export const updateUserGroupSuccess = (userGroup) => ({
    type: UPDATE_USER_GROUP_SUCCESS,
    userGroup
})

export const updateUserGroupError = (error) => ({
    type: UPDATE_USER_GROUP_ERROR,
    error
})