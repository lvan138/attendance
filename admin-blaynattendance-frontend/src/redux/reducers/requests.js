import { GET_REQUEST_SUCCESS } from "../actions/constants";

const initalState = {
    payrollRequest: [],
    shiftRequest: [],
    leaveRequest: [],
    feedback: []
}

const requests = (state = initalState, action) => {
    switch (action.type) {
        case GET_REQUEST_SUCCESS:
            return action.requests;
    
        default:
            return state;
    }
}

export default requests