import{call, put, select, takeLatest} from 'redux-saga/effects'
import * as apis from '../api'
import{
    GET_LEAVE
} from '../redux/actions/constants'
import * as actions from '../redux/actions/leave'

function getLeaveData(url){
    try{
        return apis.getData(url)
        .then(value => value.leaveRequest)
    } catch (error){
        throw error;
    }
}

function* getLeave(action){
    try {
        let leave = yield call (getLeaveData, '/show-leave-request');
        console.log(leave);
        yield put(actions.getLeaveSuccess(leave));
        console.log('van');
    } catch (error) {
        yield put(actions.getLeaveError(error));
    }
}

export function* watchGetLeave(){
    yield takeLatest(GET_LEAVE,getLeave);
}