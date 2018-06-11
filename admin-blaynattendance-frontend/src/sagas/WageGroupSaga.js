import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as apis from '../api'

import {
    GET_WAGE_GROUP,
    GET_WAGE_GROUP_ERROR,
    GET_WAGE_GROUP_SUCCESS,
    EDIT_WAGE_GROUP,
    DELETE_WAGE_GROUP,
    ADD_WAGE_GROUP,
    CREATE_WAGE_GROUP,
    UPDATE_WAGE_GROUP,
    GET_WAGE_STORY
} from '../redux/actions/constants';

import * as actions from '../redux/actions/WageGroup';
import { updateWageGroup } from '../redux/actions/WageGroup';

function getWageGroupData(url) {
    try {
        return apis.getData(url)
                .then(value => value.wageGroups)
    } catch (error) {
        throw error;
    }   
}

function getWageStoryData(url) {
    try {
        return apis.getData(url)
                .then(value => value.wageStory)
    } catch (error) {
        throw error;
    }   
}

function postWageGroup(data) {
    try {
        return apis.postData('/wage-groups', data).
            then(response => response.wageGroup);
    } catch (error) {
        throw error;
    }
}

function deleteWageGroup(id) {
    try {
        const url = '/wage-groups/' + id
        return apis.deleteData(url)
                .then(response => response.wageGroup)
                .then(wageGroup => wageGroup.id);
    } catch(error) {
        throw error;
    }
}

function putUpdateWageGroupData(wageGroup) {
    try {
        const url = '/wage-groups/' + wageGroup.id
        const data = {name: wageGroup.name, salary: wageGroup.wage.salary, start_date:wageGroup.wage.start_date}
        return apis.putData(url, data)
            .then(response => response.wageGroup)
    } catch (error) {
        throw error;
    }
}

function* getWageGroup(action) {
    try {
        let wageGroups = yield call (getWageGroupData, '/wage-groups');
        yield put(actions.getWageGroupSuccess(wageGroups));

    } catch (error) {
        yield put(actions.getWageGroupError(error));
    }
}

function* getWageStory(action) {
    try {
        let wageStory = yield call (getWageStoryData, '/wage-story');
        console.log(wageStory);
        yield put(actions.getWageStorySuccess(wageStory));

    } catch (error) {
        yield put(actions.getWageStoryError(error));
    }
}

function* createWageGroup(action) {
    try {
        const data = action.wageGroup;
        let wageGroup = yield call(postWageGroup, data);
        console.log(wageGroup);
        yield put(actions.createWageGroupSuccess(wageGroup)); 
    } catch (error) {
        yield put(actions.createWageGroupError(error));
    }
}

function* deleteWageGroupFlow(action) {
    try {
        const id = yield call(deleteWageGroup, action.id);
        yield put(actions.deleteWageGroupSuccess(id));
    } catch (error) {
        yield put(actions.deleteWageGroupError(error));
    }
}

function* updateWageGroupFlow(action) {
    try {
        const wageGroup = yield call(putUpdateWageGroupData, action.wageGroup);
        yield put(actions.updateWageGroupSuccess(wageGroup));
    } catch (error) {
        yield put(actions.updateWageGroupError(error))
    }
}

export function* watchGetWageGroup() {
    yield takeLatest(GET_WAGE_GROUP, getWageGroup);
} 

export function* watchCreateWageGroup() {
    yield takeLatest(CREATE_WAGE_GROUP, createWageGroup);
}

export function* watchDeleteWageGroup() {
    yield takeLatest(DELETE_WAGE_GROUP, deleteWageGroupFlow);
}

export function* watchUpdateWageGroup() {
    yield takeLatest(UPDATE_WAGE_GROUP, updateWageGroupFlow);
}

export function* watchGetWageStory() {
    yield takeLatest(GET_WAGE_STORY, getWageStory);
}