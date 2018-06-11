import { combineReducers } from 'redux'
import auth from './auth'
import client from './client'
import wageStory from './wageStory'
import payrolRequest from './payrolRequest'
import leaveShiftRequest from './leaveShiftRequest'
import leaveRequest from './leaveRequest'
import changeShiftRequest from './changeShiftRequest'
import feedbackRequest from './feedbackRequest'
import notification from './notification'
import shifts from './shifts'
import shiftsInDay from './shiftsInDay'
import leave from './leave'
import payroll from './ungLuong'
import leaveShift from './leaveShift'
import changeShift from './changeShift'
import comment from './comment'
import commentRequest from'./postComment'
import attendance from './attendance'
import profile from './profile'
import payrolls from './payroll'
import attendances from './chamcong'
import payrollss from './payrolls'
import password from './password'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    form: formReducer,
    auth,
    client,
    wageStory,
    payrolRequest,
    leaveShiftRequest,
    leaveRequest,
    changeShiftRequest,
    feedbackRequest,
    notification,
    shifts,
    shiftsInDay,
    leave,
    payroll,
    leaveShift,
    changeShift,
    comment,
    commentRequest,
    attendance,
    profile,
    payrolls,
    attendances,
    payrollss,
    password,
})