import {List, fromJS} from "immutable";

import {
    POST_COMMENT,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_ERROR
} from '../actions/constants'

const commentRequest =(state=[], action)=>{
    switch(action.type){
        case POST_COMMENT_SUCCESS:
            return state.concat([action.commentRequest]);
        default:
            return state;
    }
}
