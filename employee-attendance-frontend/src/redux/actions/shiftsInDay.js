import { GET_SHIFT_IN_DAY, GET_SHIFT_IN_DAY_SUCCESS, GET_SHIFT_IN_DAY_ERROR } from "./constants";

export const getShiftInDay = () => ({
    type: GET_SHIFT_IN_DAY
})

export const getShiftInDaySuccess = (shiftsInDay) => ({
    type: GET_SHIFT_IN_DAY_SUCCESS,
    shiftsInDay
})

export const getShiftInDayError = (error) => ({
    type: GET_SHIFT_IN_DAY_ERROR,
    error
})