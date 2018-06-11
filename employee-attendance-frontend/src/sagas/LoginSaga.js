import axios from 'axios'
import { take, fork, cancel, call, put, cancelled, takeLatest } from 'redux-saga/effects'
import createHistory from 'history/createBrowserHistory'
import 'regenerator-runtime/runtime'

import {  
    LOGIN_REQUESTING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
    CLIENT_SET,
    CLIENT_UNSET
} from '../redux/actions/constants'

import {
    loginRequest,
    loginSuccess,
    loginError  
} from '../redux/actions/auth'

import {
    setClient,
    unsetClient
} from '../redux/actions/client'

const ROOT_URL = 'http://127.0.0.1:8000';
const history = createHistory();

function loginApi (email, password) {
    return axios.post(`${ROOT_URL}/api/login/employee`,{email,password})
            .then(response => response.data)
            .catch((error) => { throw error })
}

function logoutApi(token) {
    return axios.post(`${ROOT_URL}/api/logout`, {token})
            .then(response => response.data)
            .catch((error) => { throw error})
}

function* logout() {
    const token = localStorage.getItem('token')
    const data = yield call(logoutApi, token)
    yield put(unsetClient())
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    history.push('/')
    history.go('/')
}

function* loginFlow(email, password, dispatch) {
    let token

    try {
        let response = yield call(loginApi, email, password)
        token = response.token
        yield put(setClient(token, response.user))
        //dispatch(setClient(token, response.user))
        yield put(loginSuccess(token))

        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(response.user))

        history.push('/')
        history.go('/')
    } catch (error) {
        yield put({type: LOGIN_ERROR, error})
    } finally {
        if (yield cancelled()) {
            history.push('/login')
            history.go('/login')
        }
    }

    return token;
}

export function* loginWatcher() {
    while(true) {
        const {email, password} = yield take(LOGIN_REQUESTING)
        const task = yield fork(loginFlow, email, password)
        const action = yield take([CLIENT_UNSET, LOGIN_ERROR])

        if (action.type === CLIENT_UNSET) yield cancel(task)
    }
}

export function* logoutWatcher() {
    yield takeLatest(LOGOUT, logout);
}