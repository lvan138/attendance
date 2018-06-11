import{
    GET_NOTIFICATION,
    GET_NOTIFICATION_SUCCESS,
    GET_NOTIFICATION_ERROR,
    GET_COMMENT,
    GET_COMMENT_SUCCESS,
    GET_COMMENT_ERROR,
    POST_COMMENT,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_ERROR
} from './constants'

export const getNotification=()=>({
    type:GET_NOTIFICATION
})
export const getNotificationSuccess = (notification) => ({
    type: GET_NOTIFICATION_SUCCESS,
    notification
})

export const getNotificationError = (error) => ({
    type: GET_NOTIFICATION_ERROR,
    error
})

export const getComment=()=>({
    type:GET_COMMENT
})
export const getCommentSuccess = (comment) => ({
    type: GET_COMMENT_SUCCESS,
    comment
})

export const getCommentError = (error) => ({
    type: GET_COMMENT_ERROR,
    error
})

export const postComment = (commentRequest)=>(
{
    type: POST_COMMENT,
    commentRequest
})
export const postCommentSuccess = ( commentRequest)=>({
    type:  POST_COMMENT_SUCCESS,
    commentRequest
})

export const postCommentError = (error)=>({
    type: POST_COMMENT_ERROR,
    error
})
    
