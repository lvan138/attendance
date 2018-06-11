import{call, put, select, takeLatest} from 'redux-saga/effects'
import * as apis from '../api'
import{
    GET_LEAVE_SHIFT
} from '../redux/actions/constants'
import * as actions from '../redux/actions/leaveShift'

function getLeaveShiftData(url){
    try{
        return apis.getData(url)
        .then(value => value.leaveShiftRequest)
    } catch (error){
        throw error;
    }
}

function* getLeaveShift(action){
    try {
        let leaveShift = yield call (getLeaveShiftData, '/show-leave-shift-request');
        console.log(leaveShift);
        yield put(actions.getLeaveShiftSuccess(leaveShift));
        console.log('van');
    } catch (error) {
        yield put(actions.getLeaveShiftError(error));
    }
}

export function* watchGetLeaveShift(){
    yield takeLatest(GET_LEAVE_SHIFT,getLeaveShift);
}