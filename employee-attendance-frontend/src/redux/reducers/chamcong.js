import {
    GET_ATTENDANCES_SUCCESS
} from "../actions/constants"

const attendances = (state = [], action) => {
    switch (action.type) {
        case GET_ATTENDANCES_SUCCESS:
            return action.attendances;
        default:
           return state;
   }
}

export default attendances;