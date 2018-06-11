import * as apis from '../../api'

var events = [];

apis.getData('/shifts')
    .then(value => value.shifts)
    .then(shifts => {
      for (let shift of shifts) {
        let date = shift.date.split('-');
        let start_time = shift.start_time.split(':')
        let end_time = shift.end_time.split(':')
        let event = {
          id: shift.id,
          title: shift.name,
          start: new Date(parseInt(date[0]),parseInt(date[1])-1,parseInt(date[2]),
                          parseInt(start_time[0]),parseInt(start_time[1]),parseInt(start_time[2])),
          end: new Date(parseInt(date[0]),parseInt(date[1])-1,parseInt(date[2]),
                        parseInt(end_time[0]),parseInt(end_time[1]),parseInt(end_time[2]))
        }
        events.push(event)
      }
    });
  
export default events;