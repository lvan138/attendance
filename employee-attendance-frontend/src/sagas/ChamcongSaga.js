import{call, put, select, takeLatest} from 'redux-saga/effects'
import * as apis from '../api'
import {
    GET_ATTENDANCES
} from '../redux/actions/constants'
import * as actions from '../redux/actions/chamcong'

function getAttendancesData(url){
    try{
        return apis.getData(url)
        .then(value => value.allAttendance)
    } catch (error){
        throw error;
    }
}

function* getAttendances(action){
    try {
        let attendaces = yield call (getAttendancesData, '/all-attendance');
       
        yield put(actions.getAttendancesSuccess(attendaces));

    } catch (error) {
        yield put(actions.getAttendancesError(error));
    }
}

export function* watchGetAttendances(){
    yield takeLatest(GET_ATTENDANCES, getAttendances);
}