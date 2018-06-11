import{
    GET_PAYROLL,
    GET_PAYROLL_SUCCESS,
    GET_PAYROLL_ERROR,
} from './constants'

export const getPayroll=()=>({
    type:GET_PAYROLL
})
export const getPayrollSuccess = (payroll) => ({
    type: GET_PAYROLL_SUCCESS,
    payroll
})

export const getPayrollError = (error) => ({
    type: GET_PAYROLL_ERROR,
    error
})