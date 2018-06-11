import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as apis from '../api'

import {
    GET_SHIFT_PATTERN,
    GET_SHIFT_PATTERN_ERROR,
    GET_SHIFT_PATTERN_SUCCESS,
    EDIT_SHIFT_PATTERN,
    DELETE_SHIFT_PATTERN,
    ADD_SHIFT_PATTERN,
    CREATE_SHIFT_PATTERN,
    UPDATE_SHIFT_PATTERN,
} from '../redux/actions/constants';

import * as actions from '../redux/actions/shiftPatterns';

function getShiftPatternData(url) {
    try {
        return apis.getData(url)
                .then(value => value.shift_patterns)
    } catch (error) {
        throw error;
    }   
}

function postShiftPattern(data) {
    try {
        return apis.postData('/shift-patterns', data).
            then(response => response.shift_pattern);
    } catch (error) {
        throw error;
    }
}

function deleteShiftPattern(id) {
    try {
        const url = '/shift-patterns/' + id
        return apis.deleteData(url)
                .then(response => response.shift_pattern)
                .then(shift_pattern => shift_pattern.id);
    } catch(error) {
        throw error;
    }
}

function putUpdateShiftPatternData(shiftPattern) {
    try {
        const url = '/shift-patterns/' + shiftPattern.id
        const data = shiftPattern
        return apis.putData(url, data)
            .then(response => response.shift_pattern)
    } catch (error) {
        throw error;
    }
}

function* getShiftPattern(action) {
    try {
        let shiftPatterns = yield call (getShiftPatternData, '/shift-patterns');
        yield put(actions.getShiftPatternSuccess(shiftPatterns));

    } catch (error) {
        yield put(actions.getShiftPatternError(error));
    }
}

function* createShiftPattern(action) {
    try {
        const data = action.shiftPattern;
        let shiftPattern = yield call(postShiftPattern, data);
        console.log(shiftPattern);
        yield put(actions.createShiftPatternSuccess(shiftPattern)); 
    } catch (error) {
        yield put(actions.createShiftPatternError(error));
    }
}

function* deleteShiftPatternFlow(action) {
    try {
        console.log(action)
        const id = yield call(deleteShiftPattern, action.id);
        yield put(actions.deleteShiftPatternSuccess(id));
    } catch (error) {
        yield put(actions.deleteShiftPatternError(error));
    }
}

function* updateShiftPatternFlow(action) {
    try {
        const shiftPattern = yield call(putUpdateShiftPatternData, action.shiftPattern);
        yield put(actions.updateShiftPatternSuccess(shiftPattern));
    } catch (error) {
        yield put(actions.updateShiftPatternError(error))
    }
}

export function* watchGetShiftPattern() {
    yield takeLatest(GET_SHIFT_PATTERN, getShiftPattern);
} 

export function* watchCreateShiftPattern() {
    yield takeLatest(CREATE_SHIFT_PATTERN, createShiftPattern);
}

export function* watchDeleteShiftPattern() {
    yield takeLatest(DELETE_SHIFT_PATTERN, deleteShiftPatternFlow);
}

export function* watchUpdateShiftPattern() {
    yield takeLatest(UPDATE_SHIFT_PATTERN, updateShiftPatternFlow);
}