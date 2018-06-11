import { PUT_ERROR, PUT_SUCCESS, CLEAR_MESSAGE } from "../actions/constants";

const initalState = {
    success: null,
    error: null
}

const message = (state = initalState, action) => {
    switch (action.type) {
        case PUT_ERROR:
            return {
                success: null,
                error: action.error
            }

        case PUT_SUCCESS:
            return {
                success: action.message,
                error: null
            }
        
        case CLEAR_MESSAGE:
            return {
                success: null,
                error: null
            }
        default:
            return state
    }
}

export default message