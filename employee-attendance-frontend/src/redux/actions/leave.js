import{
    GET_LEAVE,
    GET_LEAVE_SUCCESS,
    GET_LEAVE_ERROR,
} from './constants'

export const getLeave=()=>({
    type:GET_LEAVE
})
export const getLeaveSuccess = (leave) => ({
    type: GET_LEAVE_SUCCESS,
    leave
})

export const getLeaveError = (error) => ({
    type: GET_LEAVE_ERROR,
    error
})