import{call, put, select, takeLatest} from 'redux-saga/effects'
import * as apis from '../api'
import {
    GET_NOTIFICATION
} from '../redux/actions/constants'
import * as actions from '../redux/actions/notification'

function getNotificationData(url){
    try{
        return apis.getData(url)
        .then(value => value.notification)
    } catch (error){
        throw error;
    }
}

function* getNotification(action){
    try {
        let notification = yield call (getNotificationData, '/get-notification');
        console.log(notification);
        yield put(actions.getNotificationSuccess(notification));
        console.log('van');
    } catch (error) {
        yield put(actions.getNotificationError(error));
    }
}

export function* watchGetNotification(){
    yield takeLatest(GET_NOTIFICATION,getNotification);
}