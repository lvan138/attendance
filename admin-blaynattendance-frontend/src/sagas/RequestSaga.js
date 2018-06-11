import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as apis from '../api'
import * as actions from '../redux/actions/requests'
import { GET_REQUEST } from '../redux/actions/constants';

function getRequest() {
    return apis.getData('/requests').then(value => value.requests)
}

function* getRequestFlow() {
    const requests = yield call(getRequest)
    yield put(actions.getRequestSuccess(requests))
}

export function* watchGetRequest() {
    yield takeLatest(GET_REQUEST, getRequestFlow)
}