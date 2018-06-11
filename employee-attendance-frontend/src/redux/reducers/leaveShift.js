import {
    GET_LEAVE_SHIFT_SUCCESS
} from "../actions/constants"

const leaveShift = (state = [], action) => {
    switch (action.type) {
        case GET_LEAVE_SHIFT_SUCCESS:
            return action.leaveShift;
        default:
           return state;
   }
}

export default leaveShift;