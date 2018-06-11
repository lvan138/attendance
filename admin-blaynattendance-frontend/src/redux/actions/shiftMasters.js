import {
    GET_SHIFT_MASTER,
    GET_SHIFT_MASTER_ERROR,
    GET_SHIFT_MASTER_SUCCESS,
    CREATE_SHIFT_MASTER,
    CREATE_SHIFT_MASTER_SUCCESS,
    CREATE_SHIFT_MASTER_ERROR,
    UPDATE_SHIFT_MASTER,
    UPDATE_SHIFT_MASTER_SUCCESS,
    UPDATE_SHIFT_MASTER_ERROR,
    DELETE_SHIFT_MASTER,
    DELETE_SHIFT_MASTER_SUCCESS,
    DELETE_SHIFT_MASTER_ERROR,
    GET_SHIFT,
    GET_SHIFT_SUCCESS,
    GET_SHIFT_ERROR,
} from './constants'

export const getShiftMaster = () => ({
    type: GET_SHIFT_MASTER
})

export const getShiftMasterSuccess = (shiftMasters) => ({
    type: GET_SHIFT_MASTER_SUCCESS,
    shiftMasters
})

export const getShiftMasterError = (error) => ({
    type: GET_SHIFT_MASTER_ERROR,
    error
})

export const createShiftMaster = (shiftMaster) => ({
    type: CREATE_SHIFT_MASTER,
    shiftMaster
})

export const createShiftMasterSuccess = (shiftMaster) => ({
    type: CREATE_SHIFT_MASTER_SUCCESS,
    shiftMaster
})

export const createShiftMasterError = (error) => ({
    type: CREATE_SHIFT_MASTER_ERROR,
    error
})

export const deleteShiftMaster = id => ({
    type: DELETE_SHIFT_MASTER,
    id
})

export const deleteShiftMasterSuccess = id => ({
    type: DELETE_SHIFT_MASTER_SUCCESS,
    id
})

export const deleteShiftMasterError = (error) => ({
    type: DELETE_SHIFT_MASTER_ERROR,
    error
})

export const updateShiftMaster = (shiftMaster) => ({
    type: UPDATE_SHIFT_MASTER,
    shiftMaster
})

export const updateShiftMasterSuccess = (shiftMaster) => ({
    type: UPDATE_SHIFT_MASTER_SUCCESS,
    shiftMaster
})

export const updateShiftMasterError = (error) => ({
    type: UPDATE_SHIFT_MASTER_ERROR,
    error
})

export const getShift = (today) => ({
    type: GET_SHIFT,
    today
})

export const getShiftSuccess = (shifts) => ({
    type: GET_SHIFT_SUCCESS,
    shifts
})

export const getShiftError = (error) => ({
    type: GET_SHIFT_ERROR,
    error
})