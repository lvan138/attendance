import {
    CREATE_PAYROL_REQUEST,
    CREATE_PAYROL_REQUEST_SUCCESS,
    CREATE_PAYROL_REQUEST_ERROR,
} from './constants'

export const createPayrolRequest = (payrolRequest)=>(
{
    type: CREATE_PAYROL_REQUEST,
    payrolRequest
})
export const createPayrolRequestSuccess = (payrolRequest)=>({
    type: CREATE_PAYROL_REQUEST_SUCCESS,
    payrolRequest
})
export const createPayrolRequestError = (error)=>({
    type: CREATE_PAYROL_REQUEST_ERROR,
    error
})
