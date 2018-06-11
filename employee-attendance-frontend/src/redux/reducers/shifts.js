import { GET_SHIFT_SUCCESS } from "../actions/constants";

const shifts = (state = [], action) => {
    switch(action.type) {
        case GET_SHIFT_SUCCESS:
            return action.shifts
        default:
            return state
    }
}

export default shifts