import { GET_REQUEST, GET_REQUEST_SUCCESS, GET_REQUEST_ERROR } from "./constants";

export const getRequest = () => ({
    type: GET_REQUEST
})

export const getRequestSuccess = (requests) => ({
    type: GET_REQUEST_SUCCESS,
    requests
})

export const getRequestError = (error) => ({
    type: GET_REQUEST_ERROR,
    error
})