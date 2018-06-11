import { GET_PAYROLL_EMPLOYEE_SUCCESS } from "../actions/constants";

const payrollEmployee = (state = [], action) => {
    switch (action.type) {
        case GET_PAYROLL_EMPLOYEE_SUCCESS:
            return action.payrolls
    
        default:
            return state;
    }
}

export default payrollEmployee