import {
    CREATE_LEAVE_REQUEST,
    CREATE_LEAVE_REQUEST_SUCCESS,
    CREATE_LEAVE_REQUEST_ERROR,
} from './constants'

export const createLeaveRequest = ( leaveRequest)=>(
{
    type: CREATE_LEAVE_REQUEST,
    leaveRequest
})
export const createLeaveRequestSuccess = ( leaveRequest)=>({
    type:  CREATE_LEAVE_REQUEST_SUCCESS,
    leaveRequest
})
export const createLeaveRequestError = (error)=>({
    type: CREATE_LEAVE_REQUEST_ERROR,
    error
})
