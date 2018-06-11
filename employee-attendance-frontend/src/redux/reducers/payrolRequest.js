import {List, fromJS} from "immutable";

import {
    CREATE_PAYROL_REQUEST,
    CREATE_PAYROL_REQUEST_SUCCESS,
    CREATE_PAYROL_REQUEST_ERROR,
} from '../actions/constants'

const payrolRequest =(state=[], action)=>{
    switch(action.type){
        case CREATE_PAYROL_REQUEST_SUCCESS:
            return state.concat([action.payrolRequest]);
        default:
            return state;
    }
}
