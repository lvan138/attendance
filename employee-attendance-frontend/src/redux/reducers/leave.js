import {
    GET_LEAVE_SUCCESS
} from "../actions/constants"

const leave = (state = [], action) => {
    switch (action.type) {
        case GET_LEAVE_SUCCESS:
            return action.leave;
        default:
           return state;
   }
}

export default leave;