import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as apis from '../api'
import * as actions from '../redux/actions/notification'
import { GET_COMMENT,POST_COMMENT } from '../redux/actions/constants';


function getComments() {
    return apis.getData('/show-comment')
        .then (value => value.comment)
}

function* getCommentsFlow(action) {
    console.log(action)
    const comments = yield call(getComments)
    console.log(comments)
    yield put(actions.getCommentSuccess(comments))
}

export function* watchGetComment() {
    yield takeLatest(GET_COMMENT, getCommentsFlow);
}
//post comment
function postComment(data){
    try{
        return apis.postData('/post-comment', data)
            .then(response => response.commentRequest);
        // .then(response => response.comment)
    } catch(error){
        throw error;
    }
}
function* createComment(action){
    try{
        const data = action.commentRequest;
        let comment = yield call(postComment,data);
       
        yield put(actions.postCommentSuccess());
    } catch (error){
        yield put(actions.postCommentError(error));
    }
}

export function* watchCreateComment(){
    yield takeLatest( POST_COMMENT,createComment);
}
