import {
    CREATE_CHANGE_SHIFT_REQUEST,
    CREATE_CHANGE_SHIFT_REQUEST_SUCCESS,
    CREATE_CHANGE_SHIFT_REQUEST_ERROR,
} from './constants'

export const createChangeShiftRequest = ( changeShiftRequest)=>(
{
    type: CREATE_CHANGE_SHIFT_REQUEST,
    changeShiftRequest
})
export const createChangeShiftRequestSuccess = ( changeShiftRequest)=>({
    type:  CREATE_CHANGE_SHIFT_REQUEST_SUCCESS,
    changeShiftRequest
})
export const createChangeShiftRequestError = (error)=>({
    type: CREATE_CHANGE_SHIFT_REQUEST_ERROR,
    error
})
