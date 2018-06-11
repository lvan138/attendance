import {
    GET_PAYROLL_SUCCESS
} from "../actions/constants"

const payroll = (state = [], action) => {
    switch (action.type) {
        case GET_PAYROLL_SUCCESS:
            return action.payroll;
        default:
           return state;
   }
}

export default payroll;