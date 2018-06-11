import { GET_SHIFT_IN_DAY_SUCCESS } from "../actions/constants";

const shiftsInDay = (state = [], action) => {
    switch(action.type) {
        case GET_SHIFT_IN_DAY_SUCCESS:
            return action.shiftsInDay
        default:
            return state
    }
}

export default shiftsInDay