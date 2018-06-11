import{call, put, select, takeLatest} from 'redux-saga/effects'
import * as apis from '../api'
import {
    GET_PAYROLLS
} from '../redux/actions/constants'
import * as actions from '../redux/actions/payroll'

function getPayrollsData(url){
    try{
        return apis.getData(url)
        .then(value => value.kq)
    } catch (error){
        throw error;
    }
}

function* getPayrolls(action){
    try {
        let attendace = yield call (getPayrollsData, '/salary');
       
        yield put(actions.getPayrollsSuccess(attendace));

    } catch (error) {
        yield put(actions.getPayrollsError(error));
    }
}

export function* watchGetPayrolls(){
    yield takeLatest(GET_PAYROLLS, getPayrolls);
}