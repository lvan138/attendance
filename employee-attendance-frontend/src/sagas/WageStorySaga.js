import{call, put, select, takeLatest} from 'redux-saga/effects'
import * as apis from '../api'
import {
    GET_WAGE_STORY
} from '../redux/actions/constants'
import * as actions from '../redux/actions/WageStory'

function getWageStoryData(url){
    try{
        return apis.getData(url)
        .then(value => value.wageStory)
    } catch (error){
        throw error;
    }
}

function* getWageStory(action){
    try {
        let wageStory = yield call (getWageStoryData, '/wage-story');
        console.log(wageStory);
        yield put(actions.getWageStorySuccess(wageStory));

    } catch (error) {
        yield put(actions.getWageStoryError(error));
    }
}

export function* watchGetWageStory(){
    yield takeLatest(GET_WAGE_STORY,getWageStory);
}