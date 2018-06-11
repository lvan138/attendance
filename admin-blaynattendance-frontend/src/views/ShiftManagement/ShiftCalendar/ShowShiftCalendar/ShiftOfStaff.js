import React, {Component} from 'react'
import {} from 'reactstrap'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import { getShift } from '../../../../redux/actions/shiftMasters';
import { getUser } from '../../../../redux/actions/users';
import { connect } from 'react-redux'
BigCalendar.momentLocalizer(moment);
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
// const events = [
//     {
//       id: 0,
//       title: 'Ca1',
//       start: new Date(2018, 3, 11, 9, 0, 0),
//       end: new Date(2018, 3, 11, 13, 0, 0),
//       resourceId: 1,
//     },
//     {
//       id: 1,
//       title: 'Ca2',
//       start: new Date(2018, 3, 11, 14, 0, 0),
//       end: new Date(2018, 3, 11, 16, 30, 0),
//       resourceId: 2,
//     },
//     {
//       id: 2,
//       title: 'Ca1',
//       start: new Date(2018, 3, 11, 8, 30, 0),
//       end: new Date(2018, 3, 11, 12, 30, 0),
//       resourceId: 3,
//     },
//     {
//       id: 3,
//       title: 'Ca2',
//       start: new Date(2018, 3, 11, 7, 0, 0),
//       end: new Date(2018, 3, 11, 10, 30, 0),
//       resourceId: 4,
//     },
//   ]
  
//   const resourceMaps = [
//     { resourceId: 1, resourceTitle: 'Nguyen Van A' },
//     { resourceId: 2, resourceTitle: 'Nguyen Van B' },
//     { resourceId: 3, resourceTitle: 'Nguyen Van C' },
//     { resourceId: 4, resourceTitle: 'Nguyen Van D' },
//     { resourceId: 4, resourceTitle: 'Nguyen Van D' },
//   ]
  
class ShiftOfStaff extends Component{
    componentDidMount() {
      this.props.dispatch(getShift())
      this.props.dispatch(getUser())
    }
    
    render(){
      const { shifts, users } = this.props;
      const visibleUsers = users.filter(user => user.status == 1)
      var events = [];
      var resourceMaps = [];

      for (let shift of shifts) {
        for (let item of shift.employees) {
          let date = shift.date.split('-');
          let start_time = shift.start_time.split(':')
          let end_time = shift.end_time.split(':')
          let event = {
            id: shift.id,
            title: shift.name,
            start: new Date(parseInt(date[0]),parseInt(date[1])-1,parseInt(date[2]),
                            parseInt(start_time[0]),parseInt(start_time[1]),parseInt(start_time[2])),
            end: new Date(parseInt(date[0]),parseInt(date[1])-1,parseInt(date[2]),
                          parseInt(end_time[0]),parseInt(end_time[1]),parseInt(end_time[2])),
            resourceId: item
          }

          events.push(event)
        }
      }

      for (let user of visibleUsers) {
        let resourceMap = {
          resourceId: user.id,
          resourceTitle: user.name
        }

        resourceMaps.push(resourceMap)
      }

      return(
          <div>
              <BigCalendar
                  style={{height: "calc(90vh - 20px)", width:"100%"}}
                  events={events}
                  defaultView="day"
                  views={['day', 'work_week']}
                  step={60}
                  defaultDate={new Date()}
                  resources={resourceMaps}
                  resourceIdAccessor="resourceId"
                  resourceTitleAccessor="resourceTitle"
              />
          </div>
      )
    }
}

const mapStateToProps = state => ({
  shifts: state.shifts,
  users: state.users
})

ShiftOfStaff = connect(mapStateToProps)(ShiftOfStaff)
export default ShiftOfStaff