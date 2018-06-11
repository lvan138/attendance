import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as apis from '../api'

import {
    CREATE_LEAVE_REQUEST,
    CREATE_LEAVE_REQUEST_SUCCESS,
    CREATE_LEAVE_REQUEST_ERROR,
} from '../redux/actions/constants'

import * as actions from '../redux/actions/leaveRequest'

function postLeaveRequest(data){
    try{
        return apis.postData('/leave-request', data)
            .then(response => response.leaveRequest);
        
    } catch(error){
        throw error;
    }
}
function* createLeaveRequest(action){
    try{
        const data = action.leaveRequest;
        let leaveRequest = yield call(postLeaveRequest,data);
        console.log(leaveRequest);
        yield put(actions. createLeaveRequestSuccess());
    } catch (error){
        yield put(actions.createLeaveRequestError(error));
    }
}

export function* watchLeaveRequest(){
    yield takeLatest(  CREATE_LEAVE_REQUEST,createLeaveRequest);
}
