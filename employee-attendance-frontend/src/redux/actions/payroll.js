import{
    GET_PAYROLLS,
    GET_PAYROLLS_SUCCESS,
    GET_PAYROLLS_ERROR,
} from './constants'

export const getPayrolls=()=>({
    type:GET_PAYROLLS
})
export const getPayrollsSuccess = (payrolls) => ({
    type: GET_PAYROLLS_SUCCESS,
    payrolls
})

export const getPayrollsError = (error) => ({
    type: GET_PAYROLLS_ERROR,
    error
})