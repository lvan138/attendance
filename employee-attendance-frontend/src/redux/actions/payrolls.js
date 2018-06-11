import{
    GET_PAYROLLSS,
    GET_PAYROLLSS_SUCCESS,
    GET_PAYROLLSS_ERROR,
} from './constants'

export const getPayrollss=()=>({
    type:GET_PAYROLLSS
})
export const getPayrollssSuccess = (payrollss) => ({
    type: GET_PAYROLLSS_SUCCESS,
    payrollss
})

export const getPayrollssError = (error) => ({
    type: GET_PAYROLLSS_ERROR,
    error
})