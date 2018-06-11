import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as apis from '../api'

import {
    GET_USER_GROUP,
    GET_USER_GROUP_ERROR,
    GET_USER_GROUP_SUCCESS,
    EDIT_USER_GROUP,
    DELETE_USER_GROUP,
    ADD_USER_GROUP,
    CREATE_USER_GROUP,
    UPDATE_USER_GROUP,
} from '../redux/actions/constants';

import * as actions from '../redux/actions/userGroups';

function getUserGroupData(url) {
    try {
        return apis.getData(url)
                .then(value => value.userGroups)
    } catch (error) {
        throw error;
    }   
}

function postUserGroup(data) {
    try {
        return apis.postData('/user-groups', data).
            then(response => response.userGroup);
    } catch (error) {
        throw error;
    }
}

function deleteUserGroup(id) {
    try {
        const url = '/user-groups/' + id
        return apis.deleteData(url)
                .then(response => response.userGroup)
                .then(userGroup => userGroup.id);
    } catch(error) {
        throw error;
    }
}

function putUpdateUserGroupData(userGroup) {
    try {
        const url = '/user-groups/' + userGroup.id
        const data = userGroup
        return apis.putData(url, data)
            .then(response => response.userGroup)
    } catch (error) {
        throw error;
    }
}

function* getUserGroup(action) {
    try {
        let userGroups = yield call (getUserGroupData, '/user-groups');
        yield put(actions.getUserGroupSuccess(userGroups));

    } catch (error) {
        yield put(actions.getUserGroupError(error));
    }
}

function* createUserGroup(action) {
    try {
        const data = action.userGroup;
        let userGroup = yield call(postUserGroup, data);
        console.log(userGroup);
        yield put(actions.createUserGroupSuccess(userGroup)); 
    } catch (error) {
        yield put(actions.createUserGroupError(error));
    }
}

function* deleteUserGroupFlow(action) {
    try {
        const id = yield call(deleteUserGroup, action.id);
        yield put(actions.deleteUserGroupSuccess(id));
    } catch (error) {
        yield put(actions.deleteUserGroupError(error));
    }
}

function* updateUserGroupFlow(action) {
    try {
        const userGroup = yield call(putUpdateUserGroupData, action.userGroup);
        yield put(actions.updateUserGroupSuccess(userGroup));
    } catch (error) {
        yield put(actions.updateUserGroupError(error))
    }
}

export function* watchGetUserGroup() {
    yield takeLatest(GET_USER_GROUP, getUserGroup);
} 

export function* watchCreateUserGroup() {
    yield takeLatest(CREATE_USER_GROUP, createUserGroup);
}

export function* watchDeleteUserGroup() {
    yield takeLatest(DELETE_USER_GROUP, deleteUserGroupFlow);
}

export function* watchUpdateUserGroup() {
    yield takeLatest(UPDATE_USER_GROUP, updateUserGroupFlow);
}