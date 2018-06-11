import{call, put, select, takeLatest} from 'redux-saga/effects'
import * as apis from '../api'
import{
    GET_PAYROLL
} from '../redux/actions/constants'
import * as actions from '../redux/actions/ungLuong'

function getPayrollData(url){
    try{
        return apis.getData(url)
        .then(value => value.leaveRequest)
    } catch (error){
        throw error;
    }
}

function* getPayroll(action){
    try {
        let payroll = yield call (getPayrollData, '/show-payroll-request');
        console.log(payroll);
        yield put(actions.getPayrollSuccess(payroll));
        console.log('van');
    } catch (error) {
        yield put(actions.getPayrollError(error));
    }
}

export function* watchGetPayroll(){
    yield takeLatest(GET_PAYROLL,getPayroll);
}