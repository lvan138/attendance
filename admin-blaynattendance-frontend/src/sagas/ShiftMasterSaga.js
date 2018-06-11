import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as apis from '../api'

import {
    GET_SHIFT_MASTER,
    GET_SHIFT_MASTER_ERROR,
    GET_SHIFT_MASTER_SUCCESS,
    EDIT_SHIFT_MASTER,
    DELETE_SHIFT_MASTER,
    ADD_SHIFT_MASTER,
    CREATE_SHIFT_MASTER,
    UPDATE_SHIFT_MASTER,
    GET_SHIFT,
} from '../redux/actions/constants';

import * as actions from '../redux/actions/shiftMasters';
import { getShift } from '../redux/actions/shiftMasters';
import { clearMessage, putSuccess } from '../redux/actions/message';

function getShiftMasterData(url) {
    try {
        return apis.getData(url)
                .then(value => value.shift_masters)
    } catch (error) {
        throw error;
    }   
}

function postShiftMaster(data) {
    try {
        return apis.postData('/shift-masters', data).
            then(response => response.shift_master);
    } catch (error) {
        throw error;
    }
}

function deleteShiftMaster(id) {
    try {
        const url = '/shift-masters/' + id
        return apis.deleteData(url)
                .then(response => response.shift_master)
                .then(shift_master => shift_master.id);
    } catch(error) {
        throw error;
    }
}

function putUpdateShiftMasterData(shiftMaster) {
    try {
        const url = '/shift-masters/' + shiftMaster.id
        const data = shiftMaster
        return apis.putData(url, data)
            .then(response => response.shift_master)
    } catch (error) {
        throw error;
    }
}

function getShifts(url) {
    try {
        return apis.getData(url)
            .then(value => value.shifts)
    } catch (error) {
        throw error;
    }
}

function postScheduleShift(shift_id, employees) {
    try {
        return apis.postData('/schedule-shift', {shift_id, employees})
                    .then(value => value.shift)
    } catch (error) {
        throw error
    }
}
function* getShiftMaster(action) {
    try {
        let shiftMasters = yield call (getShiftMasterData, '/shift-masters');
        yield put(actions.getShiftMasterSuccess(shiftMasters));

    } catch (error) {
        yield put(actions.getShiftMasterError(error));
    }
}

function* createShiftMaster(action) {
    try {
        const data = action.shiftMaster;
        let shiftMaster = yield call(postShiftMaster, data);
        yield put(actions.createShiftMasterSuccess(shiftMaster)); 
    } catch (error) {
        yield put(actions.createShiftMasterError(error));
    }
}

function* deleteShiftMasterFlow(action) {
    try {
        const id = yield call(deleteShiftMaster, action.id);
        yield put(actions.deleteShiftMasterSuccess(id));
    } catch (error) {
        yield put(actions.deleteShiftMasterError(error));
    }
}

function* updateShiftMasterFlow(action) {
    try {
        const shiftMaster = yield call(putUpdateShiftMasterData, action.shiftMaster);
        yield put(actions.updateShiftMasterSuccess(shiftMaster));
    } catch (error) {
        yield put(actions.updateShiftMasterError(error))
    }
}

function* getShiftsFlow(action) {
    try {
        let url = '/shifts'
        if (action.today) {
            url = '/shifts/?today=' + action.today
        }
        const shifts = yield call(getShifts, url)
        yield put(actions.getShiftSuccess(shifts))
    } catch (error) {
        yield put(actions.getShiftError(error))
    }
}

function* scheduleShiftFlow(action) {
    try {
        let shift_id = action.id
        let employees = action.employees
        const shift = yield call(postScheduleShift, shift_id, employees)
        yield put(clearMessage())
        yield put(putSuccess('Successfully!'))
    } catch (error) {
        throw error
    }
}
export function* watchGetShiftMaster() {
    yield takeLatest(GET_SHIFT_MASTER, getShiftMaster);
} 

export function* watchCreateShiftMaster() {
    yield takeLatest(CREATE_SHIFT_MASTER, createShiftMaster);
}

export function* watchDeleteShiftMaster() {
    yield takeLatest(DELETE_SHIFT_MASTER, deleteShiftMasterFlow);
}

export function* watchUpdateShiftMaster() {
    yield takeLatest(UPDATE_SHIFT_MASTER, updateShiftMasterFlow);
}

export function* watchGetShifts() {
    yield takeLatest(GET_SHIFT, getShiftsFlow);
}

export function* watchScheduleShift() {
    yield takeLatest('SCHEDULE_SHIFT', scheduleShiftFlow);
}