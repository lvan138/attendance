import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as apis from '../api'
import * as actions from '../redux/actions/attendance'
import { CHECK_IN, GET_ATTENDANCE, CHECK_OUT } from '../redux/actions/constants';
import { putSuccess, clearMessage } from '../redux/actions/message';

function checkIn(employee_id, shift_id) {
    try {
        return apis.postData('/check-in', {employee_id, shift_id})
                    .then(value => value.workedTime)
    } catch (error) {
        throw error
    }
}

function checkOut(employee_id, shift_id) {
    try {
        return apis.postData('/check-out', {employee_id, shift_id})
                    .then(value => value.workedTime)
    } catch (error) {
        throw error
    }
}

function getAttendanceData() {
    try {
        return apis.getData('/attendance')
                .then (value => value.workedTimes)
    } catch(error) {
        throw error
    }
}

function* checkInFlow(action) {
    try {
        let employee_id = action.employee_id
        let shift_id = action.shift_id
        const workedTime = yield call(checkIn, employee_id, shift_id)
        yield put(actions.checkInSuccess(workedTime))
        yield put(clearMessage())
        yield put(putSuccess('Check in successfully!'))
    } catch(error) {
        yield put(actions.checkInError(error))
    }
}

function* checkOutFlow(action) {
    try {
        let employee_id = action.employee_id
        let shift_id = action.shift_id
        const workedTime = yield call(checkOut, employee_id, shift_id)
        yield put(actions.checkOutSuccess(workedTime))
        yield put(clearMessage())
        yield put(putSuccess('Check out successfully!'))
    } catch(error) {
        yield put(actions.checkOutError(error))
    }
}

function* getAttendanceFlow(action) {
    try {
        const workedTimes = yield call(getAttendanceData)
        yield put(actions.getAttendanceSuccess(workedTimes))
    } catch (error) {
        yield put(actions.getAttendanceError(error))
    }
}
export function* watchCheckInFlow() {
    yield takeLatest(CHECK_IN, checkInFlow);
}

export function* watchGetAttendance() {
    yield takeLatest(GET_ATTENDANCE, getAttendanceFlow);
}

export function* watchCheckOutFlow() {
    yield takeLatest(CHECK_OUT, checkOutFlow);
}