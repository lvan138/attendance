import {
    GET_PAYROLLSS_SUCCESS
} from "../actions/constants"

const payrollss = (state = [], action) => {
    switch (action.type) {
        case GET_PAYROLLSS_SUCCESS:
            return action.payrollss;
        default:
           return state;
   }
}

export default payrollss;