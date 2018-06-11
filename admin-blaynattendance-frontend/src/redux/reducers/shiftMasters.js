import { CREATE_SHIFT_MASTER_SUCCESS, GET_SHIFT_MASTER_SUCCESS, UPDATE_SHIFT_MASTER_SUCCESS, DELETE_SHIFT_MASTER_SUCCESS } from "../actions/constants";

const shiftMasters = (state = [], action) => {
    switch (action.type) {
        case GET_SHIFT_MASTER_SUCCESS: 
            return action.shiftMasters;
        case CREATE_SHIFT_MASTER_SUCCESS:
            return state.concat([action.shiftMaster]);
        case UPDATE_SHIFT_MASTER_SUCCESS: {
            const {id, ...rest} = action.shiftMaster

            return state.map(shiftMaster => {
                if(shiftMaster.id === id) {
                    return {...shiftMaster, ...rest}
                }
                
                return shiftMaster;
            })
        }
        case DELETE_SHIFT_MASTER_SUCCESS:
            return state.filter(shiftMaster => shiftMaster.id !== action.id);
        default:
            return state;
    }
}

export default shiftMasters;