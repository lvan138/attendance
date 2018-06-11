import {List, fromJS} from "immutable";

import {
    CREATE_FEEDBACK_REQUEST,
    CREATE_FEEDBACK_REQUEST_SUCCESS,
    CREATE_FEEDBACK_REQUEST_ERROR,
} from '../actions/constants'

const feedbackRequest =(state=[], action)=>{
    switch(action.type){
        case CREATE_FEEDBACK_REQUEST_SUCCESS:
            return state.concat([action.feedbackRequest]);
        default:
            return state;
    }
}
