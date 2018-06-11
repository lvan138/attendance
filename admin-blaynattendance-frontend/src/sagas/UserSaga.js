import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as apis from '../api'

import {
    GET_USER,
    GET_USER_ERROR,
    GET_USER_SUCCESS,
    EDIT_USER,
    DELETE_USER,
    CREATE_USER,
    UPDATE_USER,
} from '../redux/actions/constants';

import * as actions from '../redux/actions/users';
import { putSuccess, clearMessage } from '../redux/actions/message';

function getUserData(url) {
    try {
        return apis.getData(url)
                .then(value => value.users)
    } catch (error) {
        throw error;
    }   
}

function postUser(data) {
    try {
        return apis.postData('/users', data).
            then(response => response.user);
    } catch (error) {
        throw error;
    }
}

function deleteUser(id) {
    try {
        const url = '/users/' + id
        return apis.deleteData(url)
                .then(response => response.user)
                .then(user => user.id);
    } catch(error) {
        throw error;
    }
}

function putUpdateUserData(user) {
    try {
        const url = '/users/' + user.id
        const data = user
        return apis.putData(url, data)
            .then(response => response.user)
    } catch (error) {
        throw error;
    }
}

// function getUserById(id) {
//     try {
//         const url = '/users/' + id
//         return apis.getData(url)
//                 .then(value => value.user)
//     } catch (error) {
//         throw error;
//     }
// }

function* getUser(action) {
    try {
        let url = '/users/'
        if (action.today) {
            url = '/users/?today=' + action.today
        }
        let users = yield call (getUserData, url);
        yield put(actions.getUserSuccess(users));

    } catch (error) {
        yield put(actions.getUserError(error));
    }
}

function* createUser(action) {
    try {
        const data = action.user;
        let user = yield call(postUser, data);
        console.log(user);
        yield put(clearMessage())
        yield put(putSuccess('Succesfully!')) 
        yield put(actions.createUserSuccess(user));
    } catch (error) {
        yield put(actions.createUserError(error));
    }
}

function* deleteUserFlow(action) {
    try {
        const id = yield call(deleteUser, action.id);
        yield put(actions.deleteUserSuccess(id));
    } catch (error) {
        yield put(actions.deleteUserError(error));
    }
}

function* updateUserFlow(action) {
    try {
        const user = yield call(putUpdateUserData, action.user);
        yield put(actions.updateUserSuccess(user));
    } catch (error) {
        yield put(actions.updateUserError(error))
    }
}

// function* getUserByIdFlow(action) {
//     try {
//         const user = yield call(getUserById, action.id);
//         yield put(actions.getUserByIdSuccess(user))
//     } catch (error) {
//         yield put(actions.getUserByIdErrorr)
//     }
// }

export function* watchGetUser() {
    yield takeLatest(GET_USER, getUser);
} 

export function* watchCreateUser() {
    yield takeLatest(CREATE_USER, createUser);
}

export function* watchDeleteUser() {
    yield takeLatest(DELETE_USER, deleteUserFlow);
}

export function* watchUpdateUser() {
    yield takeLatest(UPDATE_USER, updateUserFlow);
}

// export function* watchGetUserById() {
//     yield takeLatest('GET_USER_BY_ID', getUserByIdFlow);
// }