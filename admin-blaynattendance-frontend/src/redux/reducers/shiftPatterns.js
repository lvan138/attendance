import { CREATE_SHIFT_PATTERN_SUCCESS, GET_SHIFT_PATTERN_SUCCESS, UPDATE_SHIFT_PATTERN_SUCCESS, DELETE_SHIFT_PATTERN_SUCCESS } from "../actions/constants";

const shiftPatterns = (state = [], action) => {
    switch (action.type) {
        case GET_SHIFT_PATTERN_SUCCESS: 
            return action.shiftPatterns;
        case CREATE_SHIFT_PATTERN_SUCCESS:
            return state.concat([action.shiftPattern]);
        case UPDATE_SHIFT_PATTERN_SUCCESS: {
            const {id, ...rest} = action.shiftPattern

            return state.map(shiftPattern => {
                if(shiftPattern.id === id) {
                    return {...shiftPattern, ...rest}
                }
                
                return shiftPattern;
            })
        }
        case DELETE_SHIFT_PATTERN_SUCCESS:
            return state.filter(shiftPattern => shiftPattern.id !== action.id);
        default:
            return state;
    }
}

export default shiftPatterns;