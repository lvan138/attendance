import { loginWatcher, logoutWatcher } from './LoginSaga'
import {watchGetWageStory} from './WageStorySaga'
import {watchCreatePayrolRequest} from './PayrolRequestSaga'
import {watchLeaveShiftRequest} from './LeaveShiftRequestSaga'
import {watchLeaveRequest} from './LeaveRequestSaga'
import {watchChangeShiftRequest} from './ChangeShiftRequest'
import { watchFeedbackRequest} from './FeedbackRequestSaga'
import {watchGetNotification} from './NotificationSaga'
import { watchGetShift } from './ShiftSaga';
import {watchGetLeave} from './LeaveSaga';
import {watchGetPayroll} from './UngLuongSaga';
import {watchGetLeaveShift} from './LeaveShiftSaga'
import {watchGetChangeShift} from './ChangeShiftSaga'
import {watchGetShiftInDay} from './ShiftInDaySaga'
import {watchGetComment} from './CommentSaga'
import {watchCreateComment} from './CommentSaga'
import {watchUpdateProfile, watchGetProfile} from './ProfileSaga'
import {watchGetAttendance} from'./AttendanceSaga'
import {watchGetPayrolls} from './PayrollSaga'
import {watchGetAttendances} from './ChamcongSaga'
import {watchGetPayrollss} from './PayrollsSaga'
import {watchUpdatePassword} from './PasswordSaga'

export default function* rootSaga() {
    yield [
        loginWatcher(),
        logoutWatcher(),
        watchGetWageStory(),
        watchCreatePayrolRequest(),
        watchLeaveShiftRequest(),
        watchLeaveRequest(),
        watchChangeShiftRequest(),
        watchFeedbackRequest(),
        watchGetNotification(),
        watchGetShift(),
        watchGetLeave(),
        watchGetPayroll(),
        watchGetLeaveShift(),
        watchGetChangeShift(),
        watchGetShiftInDay(),
        watchGetComment(),
        watchCreateComment(),
        watchGetAttendance(),
        watchUpdateProfile(),
        watchGetPayrolls(),
        watchGetAttendances(),
        watchGetPayrollss(),
        watchGetProfile(),
        watchUpdatePassword(),
    ]
}
