import {
    CREATE_LEAVE_SHIFT_REQUEST,
    CREATE_LEAVE_SHIFT_REQUEST_SUCCESS,
    CREATE_LEAVE_SHIFT_REQUEST_ERROR,
} from './constants'

export const createLeaveShiftRequest = ( leaveShiftRequest)=>(
{
    type: CREATE_LEAVE_SHIFT_REQUEST,
    leaveShiftRequest
})
export const createLeaveShiftRequestSuccess = ( leaveShiftRequest)=>({
    type:  CREATE_LEAVE_SHIFT_REQUEST_SUCCESS,
    leaveShiftRequest
})
export const createLeaveShiftRequestError = (error)=>({
    type: CREATE_LEAVE_SHIFT_REQUEST_ERROR,
    error
})
