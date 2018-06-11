import{call, put, select, takeLatest} from 'redux-saga/effects'
import * as apis from '../api'
import {
    GET_NOTIFICATION,
    POST_NOTIFICATION
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

//post notification
function postNotification(data){
    try{
        return apis.postData('/post-notification', data)
            .then(response => response.notificationRequest);
    } catch(error){
        throw error;
    }
}
function* createNotification(action){
    try{
        const data = action.notificationRequest;
        let notification = yield call(postNotification,data);
       console.log(notification);
        yield put(actions.postNotificationSuccess());
    } catch (error){
        yield put(actions.postNotificationError(error));
    }
}

export function* watchCreateNotification(){
    yield takeLatest( POST_NOTIFICATION,createNotification);
}
