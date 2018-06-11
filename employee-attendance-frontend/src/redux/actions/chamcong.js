import{
    GET_ATTENDANCES,
    GET_ATTENDANCES_SUCCESS,
    GET_ATTENDANCES_ERROR,
} from './constants'

export const getAttendances=()=>({
    type:GET_ATTENDANCES
})
export const getAttendancesSuccess = (attendances) => ({
    type: GET_ATTENDANCES_SUCCESS,
    attendances
})

export const getAttendancesError = (error) => ({
    type: GET_ATTENDANCES_ERROR,
    error
})