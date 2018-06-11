import { GET_PAYROLL, GET_PAYROLL_SUCCESS, GET_PAYROLL_ERROR, GET_PAYROLL_EMPLOYEE, GET_PAYROLL_EMPLOYEE_SUCCESS, GET_PAYROLL_EMPLOYEE_ERROR } from "./constants";

export const getPayroll = ({month, year}) => ({
    type: GET_PAYROLL,
    month,
    year
})

export const getPayrollSuccess = payrolls => ({
    type: GET_PAYROLL_SUCCESS,
    payrolls
})

export const getPayrollError = error => ({
    type: GET_PAYROLL_ERROR,
    error
})

export const getPayrollEmployyee = ({id, month, year}) => ({
    type: GET_PAYROLL_EMPLOYEE,
    id,
    month,
    year
})

export const getPayrollEmployyeeSuccess = payrolls => ({
    type: GET_PAYROLL_EMPLOYEE_SUCCESS,
    payrolls
})

export const getPayrollEmployyeeError = error => ({
    type: GET_PAYROLL_EMPLOYEE_ERROR,
    error
})