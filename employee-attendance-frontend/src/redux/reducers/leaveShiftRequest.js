import {List, fromJS} from "immutable";

import {
    CREATE_LEAVE_SHIFT_REQUEST,
    CREATE_LEAVE_SHIFT_REQUEST_SUCCESS,
    CREATE_LEAVE_SHIFT_REQUEST_ERROR,
} from '../actions/constants'

const leaveShiftRequest =(state=[], action)=>{
    switch(action.type){
        case CREATE_LEAVE_SHIFT_REQUEST_SUCCESS:
            return state.concat([action.leaveShiftRequest]);
        default:
            return state;
    }
}
