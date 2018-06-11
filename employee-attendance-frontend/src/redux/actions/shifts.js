import { GET_SHIFT, GET_SHIFT_SUCCESS, GET_SHIFT_ERROR } from "./constants";

export const getShift = () => ({
    type: GET_SHIFT
})

export const getShiftSuccess = (shifts) => ({
    type: GET_SHIFT_SUCCESS,
    shifts
})

export const getShiftError = (error) => ({
    type: GET_SHIFT_ERROR,
    error
})