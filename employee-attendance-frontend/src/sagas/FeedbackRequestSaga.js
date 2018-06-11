import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as apis from '../api'

import {
    CREATE_FEEDBACK_REQUEST,
    CREATE_FEEDBACK_REQUEST_SUCCESS,
    CREATE_FEEDBACK_REQUEST_ERROR,
} from '../redux/actions/constants'

import * as actions from '../redux/actions/feedbackRequest'

function postFeedbackRequest(data){
    try{
        return apis.postData('/feedback-request', data)
            .then(response => response.feedbackRequest);
        
    } catch(error){
        throw error;
    }
}
function* createFeedbackRequest(action){
    try{
        const data = action.feedbackRequest;
        let feedbackRequest = yield call(postFeedbackRequest,data);
        console.log(feedbackRequest);
        yield put(actions. createFeedbackRequestSuccess());
    } catch (error){
        yield put(actions.createFeedbackRequestError(error));
    }
}

export function* watchFeedbackRequest(){
    yield takeLatest(  CREATE_FEEDBACK_REQUEST,createFeedbackRequest);
}
