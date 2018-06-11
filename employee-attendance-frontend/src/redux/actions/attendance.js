import{
    GET_ATTENDANCE,
    GET_ATTENDANCE_SUCCESS,
    GET_ATTENDANCE_ERROR,
} from './constants'

export const getAttendance=()=>({
    type:GET_ATTENDANCE
})
export const getAttendanceSuccess = (attendance) => ({
    type: GET_ATTENDANCE_SUCCESS,
    attendance
})

export const getAttendanceError = (error) => ({
    type: GET_ATTENDANCE_ERROR,
    error
})