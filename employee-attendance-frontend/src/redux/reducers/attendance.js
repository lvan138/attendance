import {
    GET_ATTENDANCE_SUCCESS
} from "../actions/constants"

const attendance = (state = [], action) => {
    switch (action.type) {
        case GET_ATTENDANCE_SUCCESS:
            return action.attendance;
        default:
           return state;
   }
}

export default attendance;