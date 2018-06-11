import { loginWatcher, logoutWatcher } from './LoginSaga'
import {watchGetWageGroup, watchCreateWageGroup, watchDeleteWageGroup, watchUpdateWageGroup, watchGetWageStory} from './WageGroupSaga'
import { watchGetUserGroup, watchCreateUserGroup, watchDeleteUserGroup, watchUpdateUserGroup } from './UserGroupSaga';
import { watchCreateUser, watchGetUser, watchUpdateUser, watchDeleteUser} from './UserSaga';
import { watchGetShiftPattern, watchCreateShiftPattern, watchDeleteShiftPattern, watchUpdateShiftPattern } from './ShiftPatternSaga';
import { watchCreateShiftMaster, watchGetShiftMaster, watchDeleteShiftMaster, watchUpdateShiftMaster, watchGetShifts, watchScheduleShift } from './ShiftMasterSaga';
import { watchCheckInFlow, watchGetAttendance, watchCheckOutFlow } from './AttendanceSaga'
import { watchGetPayroll, watchGetPayrollEmployee} from './PayrollSaga'
import { watchGetRequest } from './RequestSaga'
//notifitcation
import {watchGetNotification, watchCreateNotification} from './NotificationSaga'
import {watchGetComment, watchCreateComment} from './CommentSaga'



export default function* rootSaga() {
    yield [
        loginWatcher(),
        logoutWatcher(),
        watchGetWageGroup(),
        watchCreateWageGroup(),
        watchDeleteWageGroup(),
        watchUpdateWageGroup(),
        watchGetWageStory(),

        watchGetUserGroup(),
        watchCreateUserGroup(),
        watchDeleteUserGroup(),
        watchUpdateUserGroup(),

        watchCreateUser(),
        watchGetUser(),
        watchUpdateUser(),
        watchDeleteUser(),

        watchGetShiftPattern(),
        watchCreateShiftPattern(),
        watchDeleteShiftPattern(),
        watchUpdateShiftPattern(),

        watchCreateShiftMaster(),
        watchGetShiftMaster(),
        watchDeleteShiftMaster(),
        watchUpdateShiftMaster(),

        watchGetShifts(),
        watchScheduleShift(),

        watchCheckInFlow(),
        watchGetAttendance(),
        watchCheckOutFlow(),

        watchGetPayroll(),
        watchGetPayrollEmployee(),
        watchGetRequest(),
        //notification
        watchGetNotification(),
        watchGetComment(),
        watchCreateComment(),
        watchCreateNotification()
    ]
}