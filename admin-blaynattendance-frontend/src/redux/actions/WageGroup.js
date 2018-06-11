import {
    GET_WAGE_GROUP,
    GET_WAGE_GROUP_ERROR,
    GET_WAGE_GROUP_SUCCESS,
    CREATE_WAGE_GROUP,
    CREATE_WAGE_GROUP_SUCCESS,
    CREATE_WAGE_GROUP_ERROR,
    UPDATE_WAGE_GROUP,
    UPDATE_WAGE_GROUP_SUCCESS,
    UPDATE_WAGE_GROUP_ERROR,
    DELETE_WAGE_GROUP,
    DELETE_WAGE_GROUP_SUCCESS,
    DELETE_WAGE_GROUP_ERROR,
    GET_WAGE_STORY,
    GET_WAGE_STORY_SUCCESS,
    GET_WAGE_STORY_ERROR,
} from './constants'

export const getWageGroup = () => ({
    type: GET_WAGE_GROUP
})

export const getWageGroupSuccess = (wageGroups) => ({
    type: GET_WAGE_GROUP_SUCCESS,
    wageGroups
})

export const getWageGroupError = (error) => ({
    type: GET_WAGE_GROUP_ERROR,
    error
})

export const createWageGroup = (wageGroup) => ({
    type: CREATE_WAGE_GROUP,
    wageGroup
})

export const createWageGroupSuccess = (wageGroup) => ({
    type: CREATE_WAGE_GROUP_SUCCESS,
    wageGroup
})

export const createWageGroupError = (error) => ({
    type: CREATE_WAGE_GROUP_ERROR,
    error
})

export const deleteWageGroup = id => ({
    type: DELETE_WAGE_GROUP,
    id
})

export const deleteWageGroupSuccess = id => ({
    type: DELETE_WAGE_GROUP_SUCCESS,
    id
})

export const deleteWageGroupError = (error) => ({
    type: DELETE_WAGE_GROUP_ERROR,
    error
})

export const updateWageGroup = (wageGroup) => ({
    type: UPDATE_WAGE_GROUP,
    wageGroup
})

export const updateWageGroupSuccess = (wageGroup) => ({
    type: UPDATE_WAGE_GROUP_SUCCESS,
    wageGroup
})

export const updateWageGroupError = (error) => ({
    type: UPDATE_WAGE_GROUP_ERROR,
    error
})

export const getWageStory = () => ({
    type: GET_WAGE_STORY
})

export const getWageStorySuccess = (wageStory) => ({
    type: GET_WAGE_STORY_SUCCESS,
    wageStory
})

export const getWageStoryError = (error) => ({
    type: GET_WAGE_STORY_ERROR,
    error
})