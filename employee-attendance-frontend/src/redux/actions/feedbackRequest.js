import {
    CREATE_FEEDBACK_REQUEST,
    CREATE_FEEDBACK_REQUEST_SUCCESS,
    CREATE_FEEDBACK_REQUEST_ERROR,
} from './constants'

export const createFeedbackRequest = ( feedbackRequest)=>(
{
    type: CREATE_FEEDBACK_REQUEST,
    feedbackRequest
})
export const createFeedbackRequestSuccess = ( feedbackRequest)=>({
    type:  CREATE_FEEDBACK_REQUEST_SUCCESS,
    feedbackRequest
})

export const createFeedbackRequestError = (error)=>({
    type: CREATE_FEEDBACK_REQUEST_ERROR,
    error
})
