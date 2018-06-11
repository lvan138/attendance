import { combineReducers } from 'redux'
import auth from './auth'
import client from './client'
import wageGroups from './wageGroups'
import wageStory from './wageStory'
import userGroups from './userGroups'
import users from './users'
import shiftPatterns from './shiftPatterns'
import shiftMasters from './shiftMasters'
import shifts from './shifts'
import attendance from './attendance'
import message from './message'


//notification
import notification from './notification'
import comment from './comment'
import commentRequest from'./postComment'
import notificationRequest from './postNotification'
import payroll from './payroll'
import payrollEmployee from './payrollEmployee'
import requests from './requests'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    form: formReducer,
    auth,
    client,
    wageGroups,
    wageStory,
    userGroups,
    users,
    shiftPatterns,
    shiftMasters,
    shifts,
    attendance,
    payroll,
    payrollEmployee,
    requests,
    //notification
    notification,
    comment,
    commentRequest,
    notificationRequest,
    message
})