import {List, fromJS} from "immutable";

import {
    CREATE_CHANGE_SHIFT_REQUEST,
    CREATE_CHANGE_SHIFT_REQUEST_SUCCESS,
    CREATE_CHANGE_SHIFT_REQUEST_ERROR,
} from '../actions/constants'

const changeShiftRequest =(state=[], action)=>{
    switch(action.type){
        case CREATE_CHANGE_SHIFT_REQUEST_SUCCESS:
            return state.concat([action.changeShiftRequest]);
        default:
            return state;
    }
}
