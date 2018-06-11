import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as apis from '../api'

import {
    CREATE_PAYROL_REQUEST,
    CREATE_PAYROL_REQUEST_SUCCESS,
    CREATE_PAYROL_REQUEST_ERROR,
} from '../redux/actions/constants'

import * as actions from '../redux/actions/payrolRequest'

function postPayrolRequest(data){
    try{
        return apis.postData('/payroll-request', data)
            .then(response => response.payrolRequest);
        
    } catch(error){
        throw error;
    }
}
function* createPayrolRequest(action){
    try{
        const data = action.payrolRequest;
        let payrolRequest = yield call(postPayrolRequest,data);
        console.log(payrolRequest);
        yield put(actions.createPayrolRequestSuccess);
    } catch (error){
        yield put(actions.createPayrolRequestError(error));
    }
}

export function* watchCreatePayrolRequest(){
    yield takeLatest( CREATE_PAYROL_REQUEST,createPayrolRequest);
}
