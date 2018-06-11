import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as apis from '../api'
import * as actions from '../redux/actions/payroll'
import { GET_PAYROLL, GET_PAYROLL_EMPLOYEE } from '../redux/actions/constants';

function getPayrollData(month, year) {
    let url = '/payroll/?month='+ month + '&year='+ year
    return apis.getData(url).then(value => value.payrolls)
}

function getPayrollEmployeeData(id, month, year) {
    let url = '/payroll-employee/' + id + '?month=' + month + '&year=' + year
    return apis.getData(url).then(value => value.payrolls)
}

function* getPayrollFlow(action) {
    try {
        let month = action.month
        let year = action.year

        const payrolls = yield call(getPayrollData, month, year)
        yield put(actions.getPayrollSuccess(payrolls))
    } catch (error) {
        throw error
    }
}

function* getPayrollEmployeeFlow(action) {
    try {
        let id = action.id
        let month = action.month
        let year = action.year

        const payrolls = yield call(getPayrollEmployeeData, id, month, year)
        yield put(actions.getPayrollEmployyeeSuccess(payrolls))
    } catch (error) {
        throw error
    }
}

export function* watchGetPayroll() {
    yield takeLatest(GET_PAYROLL, getPayrollFlow)
}

export function* watchGetPayrollEmployee() {
    yield takeLatest(GET_PAYROLL_EMPLOYEE, getPayrollEmployeeFlow)
}