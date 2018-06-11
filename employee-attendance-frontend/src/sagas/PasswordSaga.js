import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as apis from '../api'
import axios from 'axios'
import {
    UPDATE_PASSWORD,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_ERROR
} from '../redux/actions/constants'

import * as actions from '../redux/actions/password'

function postUpdatePassword(data){
    try{
        const ROOT_URL = 'http://127.0.0.1:8000'
        console.log(ROOT_URL)
        return axios.post('http://127.0.0.1:8000/api/reset-password', data)
            .then(response => response.user)
        
    } catch(error){
        throw error;
    }
}
function* createUpdatePassword(action){
    try{
        const data = action.password;
        let p = yield call(postUpdatePassword,data);
        console.log(p);
        yield put(actions.updatePasswordSuccess());
    } catch (error){
        yield put(actions.updatePasswordError(error));
    }
}

export function* watchUpdatePassword(){
    yield takeLatest(  UPDATE_PASSWORD,createUpdatePassword);
}
