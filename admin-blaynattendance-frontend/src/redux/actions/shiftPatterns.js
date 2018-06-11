import {
    GET_SHIFT_PATTERN,
    GET_SHIFT_PATTERN_ERROR,
    GET_SHIFT_PATTERN_SUCCESS,
    CREATE_SHIFT_PATTERN,
    CREATE_SHIFT_PATTERN_SUCCESS,
    CREATE_SHIFT_PATTERN_ERROR,
    UPDATE_SHIFT_PATTERN,
    UPDATE_SHIFT_PATTERN_SUCCESS,
    UPDATE_SHIFT_PATTERN_ERROR,
    DELETE_SHIFT_PATTERN,
    DELETE_SHIFT_PATTERN_SUCCESS,
    DELETE_SHIFT_PATTERN_ERROR,
} from './constants'

export const getShiftPattern = () => ({
    type: GET_SHIFT_PATTERN
})

export const getShiftPatternSuccess = (shiftPatterns) => ({
    type: GET_SHIFT_PATTERN_SUCCESS,
    shiftPatterns
})

export const getShiftPatternError = (error) => ({
    type: GET_SHIFT_PATTERN_ERROR,
    error
})

export const createShiftPattern = (shiftPattern) => ({
    type: CREATE_SHIFT_PATTERN,
    shiftPattern
})

export const createShiftPatternSuccess = (shiftPattern) => ({
    type: CREATE_SHIFT_PATTERN_SUCCESS,
    shiftPattern
})

export const createShiftPatternError = (error) => ({
    type: CREATE_SHIFT_PATTERN_ERROR,
    error
})

export const deleteShiftPattern = id => ({
    type: DELETE_SHIFT_PATTERN,
    id
})

export const deleteShiftPatternSuccess = id => ({
    type: DELETE_SHIFT_PATTERN_SUCCESS,
    id
})

export const deleteShiftPatternError = (error) => ({
    type: DELETE_SHIFT_PATTERN_ERROR,
    error
})

export const updateShiftPattern = (shiftPattern) => ({
    type: UPDATE_SHIFT_PATTERN,
    shiftPattern
})

export const updateShiftPatternSuccess = (shiftPattern) => ({
    type: UPDATE_SHIFT_PATTERN_SUCCESS,
    shiftPattern
})

export const updateShiftPatternError = (error) => ({
    type: UPDATE_SHIFT_PATTERN_ERROR,
    error
})