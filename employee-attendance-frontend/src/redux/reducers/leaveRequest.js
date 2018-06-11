import {List, fromJS} from "immutable";

import {
    CREATE_LEAVE_REQUEST,
    CREATE_LEAVE_REQUEST_SUCCESS,
    CREATE_LEAVE_REQUEST_ERROR,
} from '../actions/constants'

const leaveRequest =(state=[], action)=>{
    switch(action.type){
        case CREATE_LEAVE_REQUEST_SUCCESS:
            return state.concat([action.leaveRequest]);
        default:
            return state;
    }
}
