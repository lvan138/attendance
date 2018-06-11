import {
    GET_CHANGE_SHIFT_SUCCESS
} from "../actions/constants"

const changeShift = (state = [], action) => {
    switch (action.type) {
        case GET_CHANGE_SHIFT_SUCCESS:
            return action.changeShift;
        default:
           return state;
   }
}

export default changeShift;