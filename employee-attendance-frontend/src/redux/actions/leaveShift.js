import{
    GET_LEAVE_SHIFT,
    GET_LEAVE_SHIFT_SUCCESS,
    GET_LEAVE_SHIFT_ERROR,
} from './constants'

export const getLeaveShift=()=>({
    type:GET_LEAVE_SHIFT
})
export const getLeaveShiftSuccess = (leaveShift) => ({
    type: GET_LEAVE_SHIFT_SUCCESS,
    leaveShift
})

export const getLeaveShiftError = (error) => ({
    type: GET_LEAVE_SHIFT_ERROR,
    error
})