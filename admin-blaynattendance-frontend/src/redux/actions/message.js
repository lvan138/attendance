import { PUT_ERROR, PUT_SUCCESS, CLEAR_MESSAGE } from "./constants";

export const putError = error => ({
    type: PUT_ERROR,
    error
})

export const putSuccess = message => ({
    type: PUT_SUCCESS,
    message
})

export const clearMessage = () => ({
    type: CLEAR_MESSAGE
})