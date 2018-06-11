import { CHECK_IN_SUCCESS, CHECK_OUT_SUCCESS, GET_ATTENDANCE_SUCCESS } from "../actions/constants";

const attendance = (state = [], action) => {
    switch (action.type) {
        case GET_ATTENDANCE_SUCCESS:
            return action.workedTimes
        case CHECK_IN_SUCCESS:
            return state.concat([action.workedTime])
        case CHECK_OUT_SUCCESS:
            const {id, ...rest} = action.workedTime

            return state.map(workedTime => {
                if(workedTime.id === id) {
                    return {...workedTime, ...rest}
                }
                
                return workedTime;
            })
    
        default:
            return state;
    }
}
export default attendance