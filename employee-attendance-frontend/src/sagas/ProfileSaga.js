import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as apis from '../api'
import axios from 'axios'
import { setClient } from '../redux/actions/client'

import {
    UPDATE_PROFILE
} from '../redux/actions/constants';

import * as actions from '../redux/actions/profile';

function getProfile() {
    const ROOT_URL = 'http://127.0.0.1:8000'
    let token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return axios.get(`${ROOT_URL}/api/current-user`)
                        .then(response => response.data)
                        .then(value => value.data)
}

function putUpdateProfile(user) {
    try {
        const url = '/update-profile';
        const data = {address: user.address,email: user.email, phone_number: user.phone_number}
        return apis.putData(url, data)
            .then(response =>user)
    } catch (error) {
        throw error;
    }
}

function* updateProfile(action) {
    try {
        const user = yield call(putUpdateProfile, action.profile);
        yield put(actions.updateProfileSuccess(user));
        let token = localStorage.getItem('token')
        yield put(setClient({token, user}))
        localStorage.setItem('user', JSON.stringify(user))
    } catch (error) {
        yield put(actions.updateProfileError(error))
    }
}

function* getProfileFlow() {
    const token = localStorage.getItem('token')
    const user = yield call(getProfile)
    yield put(setClient({token, user}))
}

export function* watchUpdateProfile() {
    yield takeLatest(UPDATE_PROFILE, updateProfile);
}

export function* watchGetProfile() {
    yield takeLatest('GET_PROFILE', getProfileFlow)
}
