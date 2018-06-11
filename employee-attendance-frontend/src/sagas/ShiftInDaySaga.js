import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as apis from '../api'
import * as actions from '../redux/actions/shiftsInDay'
import { GET_SHIFT_IN_DAY } from '../redux/actions/constants';

function getShifts() {
    return apis.getData('/show-shifts-in-store')
        .then (value => value.shiftsInStore)
}

function* getShiftsFlow(action) {
    console.log(action)
    const shifts = yield call(getShifts)
    console.log(shifts)
    yield put(actions.getShiftInDaySuccess(shifts))
}

export function* watchGetShiftInDay() {
    yield takeLatest(GET_SHIFT_IN_DAY, getShiftsFlow);
}