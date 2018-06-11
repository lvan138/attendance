import { CHECK_IN, CHECK_IN_SUCCESS, CHECK_IN_ERROR, CHECK_OUT, CHECK_OUT_SUCCESS, CHECK_OUT_ERROR, GET_ATTENDANCE, GET_ATTENDANCE_SUCCESS, GET_ATTENDANCE_ERROR } from "./constants";

export const checkIn = ({employee_id, shift_id}) => ({
    type: CHECK_IN,
    employee_id,
    shift_id
})

export const checkInSuccess = (workedTime) => ({
    type: CHECK_IN_SUCCESS,
    workedTime
})

export const checkInError = (error) => ({
    type: CHECK_IN_ERROR,
    error
})

export const checkOut = ({employee_id, shift_id}) => ({
    type: CHECK_OUT,
    employee_id,
    shift_id
})

export const checkOutSuccess = (workedTime) => ({
    type: CHECK_OUT_SUCCESS,
    workedTime
})

export const checkOutError = (error) => ({
    type: CHECK_OUT_ERROR,
    error
}) 

export const getAttendance = () => ({
    type: GET_ATTENDANCE
})

export const getAttendanceSuccess = (workedTimes) => ({
    type: GET_ATTENDANCE_SUCCESS,
    workedTimes
})

export const getAttendanceError = (error) => ({
    type: GET_ATTENDANCE_ERROR,
    error
})