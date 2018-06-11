import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as apis from '../api'

import {
    CREATE_LEAVE_SHIFT_REQUEST,
    CREATE_LEAVE_SHIFT_REQUEST_SUCCESS,
    CREATE_LEAVE_SHIFT_REQUEST_ERROR,
} from '../redux/actions/constants'

import * as actions from '../redux/actions/leaveShiftRequest'

function postLeaveShiftRequest(data){
    try{
        return apis.postData('/leave-shift-request', data)
            .then(response => response.leaveShiftRequest);
        
    } catch(error){
        throw error;
    }
}
function* createLeaveShiftRequest(action){
    try{
        const data = action.leaveShiftRequest;
        let leaveShiftRequest = yield call(postLeaveShiftRequest,data);
        console.log(leaveShiftRequest);
        yield put(actions. createLeaveShiftRequestSuccess());
    } catch (error){
        yield put(actions.createLeaveShiftRequestError(error));
    }
}

export function* watchLeaveShiftRequest(){
    yield takeLatest(  CREATE_LEAVE_SHIFT_REQUEST,createLeaveShiftRequest);
}
