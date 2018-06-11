import {
    GET_PAYROLLS_SUCCESS
} from "../actions/constants"

const payrolls = (state = [], action) => {
    switch (action.type) {
        case GET_PAYROLLS_SUCCESS:
            return action.payrolls;
        default:
           return state;
   }
}

export default payrolls;