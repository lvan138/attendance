import{call, put, select, takeLatest} from 'redux-saga/effects'
import * as apis from '../api'
import {
    GET_ATTENDANCE
} from '../redux/actions/constants'
import * as actions from '../redux/actions/attendance'

function getAttendanceData(url){
    try{
        return apis.getData(url)
        .then(value => value.workedTimes)
    } catch (error){
        throw error;
    }
}

function* getAttendance(action){
    try {
        let attendace = yield call (getAttendanceData, '/attendance');
       
        yield put(actions.getAttendanceSuccess(attendace));

    } catch (error) {
        yield put(actions.getAttendanceError(error));
    }
}

export function* watchGetAttendance(){
    yield takeLatest(GET_ATTENDANCE, getAttendance);
}