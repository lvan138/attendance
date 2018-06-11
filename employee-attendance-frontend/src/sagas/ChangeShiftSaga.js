import{call, put, select, takeLatest} from 'redux-saga/effects'
import * as apis from '../api'
import{
    GET_CHANGE_SHIFT
} from '../redux/actions/constants'
import * as actions from '../redux/actions/changeShift'

function getChangeShiftData(url){
    try{
        return apis.getData(url)
        .then(value => value.leaveShiftRequest)
    } catch (error){
        throw error;
    }
}

function* getChangeShift(action){
    try {
        let changeShift = yield call (getChangeShiftData, '/show-change-shift-request');
        console.log(changeShift);
        yield put(actions.getChangeShiftSuccess(changeShift));
        console.log('van');
    } catch (error) {
        yield put(actions.getChangeShiftError(error));
    }
}

export function* watchGetChangeShift(){
    yield takeLatest(GET_CHANGE_SHIFT,getChangeShift);
}