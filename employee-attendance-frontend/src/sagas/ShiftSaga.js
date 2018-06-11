import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as apis from '../api'
import * as actions from '../redux/actions/shifts'
import { GET_SHIFT } from '../redux/actions/constants';

function getShifts() {
    return apis.getData('/shifts')
        .then (value => value.shifts)
}

function* getShiftsFlow(action) {
    console.log(action)
    const shifts = yield call(getShifts)
    console.log(shifts)
    yield put(actions.getShiftSuccess(shifts))
}

export function* watchGetShift() {
    yield takeLatest(GET_SHIFT, getShiftsFlow);
}