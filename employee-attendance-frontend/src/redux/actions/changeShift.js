import{
    GET_CHANGE_SHIFT,
    GET_CHANGE_SHIFT_SUCCESS,
    GET_CHANGE_SHIFT_ERROR,
} from './constants'

export const getChangeShift=()=>({
    type:GET_CHANGE_SHIFT
})
export const getChangeShiftSuccess = (changeShift) => ({
    type: GET_CHANGE_SHIFT_SUCCESS,
    changeShift
})

export const getChangeShiftError = (error) => ({
    type: GET_CHANGE_SHIFT_ERROR,
    error
})