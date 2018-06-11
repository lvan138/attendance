import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as apis from '../api'

import {
    CREATE_CHANGE_SHIFT_REQUEST,
    CREATE_CHANGE_SHIFT_REQUEST_SUCCESS,
    CREATE_CHANGE_SHIFT_REQUEST_ERROR,
} from '../redux/actions/constants'

import * as actions from '../redux/actions/changeShiftRequest'

function postChangeShiftRequest(data){
    try{
        return apis.postData('/change-shift-request', data)
            .then(response => response.changeShiftRequest);
        
    } catch(error){
        throw error;
    }
}
function* createChangeShiftRequest(action){
    try{
        const data = action.changeShiftRequest;
        let changeShiftRequest = yield call(postChangeShiftRequest,data);
        console.log(changeShiftRequest);
        yield put(actions. createChangeShiftRequestSuccess());
    } catch (error){
        yield put(actions.createChangeShiftRequestError(error));
    }
}

export function* watchChangeShiftRequest(){
    yield takeLatest(  CREATE_CHANGE_SHIFT_REQUEST,createChangeShiftRequest);
}
