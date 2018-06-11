import {List, fromJS} from "immutable";

import {
    POST_NOTIFICATION,
    POST_NOTIFICATION_SUCCESS,
    POST_NOTIFICATION_ERROR,
} from '../actions/constants'

const notificationRequest =(state=[], action)=>{
    switch(action.type){
        case POST_NOTIFICATION_SUCCESS:
            return state.concat([action.notificationRequest]);
        default:
            return state;
    }
}
