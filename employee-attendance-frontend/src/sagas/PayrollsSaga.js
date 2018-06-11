import{call, put, select, takeLatest} from 'redux-saga/effects'
import * as apis from '../api'
import {
    GET_PAYROLLSS
} from '../redux/actions/constants'
import * as actions from '../redux/actions/payrolls'

function getPayrollssData(url){
    try{
        return apis.getData(url)
        .then(value => value.salary)
    } catch (error){
        throw error;
    }
}

function* getPayrollss(action){
    try {
        let attendace = yield call (getPayrollssData, '/all-salary');
       
        yield put(actions.getPayrollssSuccess(attendace));

    } catch (error) {
        yield put(actions.getPayrollssError(error));
    }
}

export function* watchGetPayrollss(){
    yield takeLatest(GET_PAYROLLSS, getPayrollss);
}