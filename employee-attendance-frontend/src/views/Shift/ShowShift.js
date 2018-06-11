import React from 'react'
import BigCalendar from 'react-big-calendar'
//import events from './events'
import moment from 'moment'
import {Col,Row,Breadcrumb,BreadcrumbItem,  TabContent, TabPane, Nav, NavItem, NavLink }from 'reactstrap'
import {Link} from 'react-router-dom'
import './style.scss'
import classnames from 'classnames'
import {connect } from 'react-redux'
import { getShift } from '../../redux/actions/shifts';

BigCalendar.momentLocalizer(moment);
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

function Event({ event }) {
    return (
      <div >
        <Row>
            <Col xs="12" sm="12" md="4">
                <strong>{event.title}</strong>
            </Col>
            <Col xs="12" sm="12" md="8">
                <div className="text-right">
                <Link to={"/shift-change/"+event.id} className="shift-change" >Thay đổi ca</Link>
                </div>
            </Col>
        </Row>
      </div>
    )
  }

  let components = {
    event: Event,
  }

class ShowShift extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

    componentDidMount() {
      this.props.dispatch(getShift())
    }
    render(){
      const {shifts} = this.props
      var events = []

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
      return(
        <div>
        <Nav tabs className="bg-light">
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}onClick={() => { this.toggle('1'); }}>
            <div className="text-blayn"><strong>Lịch làm việc</strong></div>   
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="border-bottom-0 border-left-0 border-right-0">
          <TabPane tabId="1">
          <BigCalendar
            popup
            style={{height: "calc(90vh - 20px)", width:"100%"}}
            events={events}
            views={['month','week','day']}
            defaultDate={new Date()}
            step={60}
            showMultiDayTimes
            components={components}
          />
          </TabPane>
        </TabContent>
      </div>
        )
    }
}
const mapStateToProps = state => ({
  shifts: state.shifts
})

ShowShift = connect(mapStateToProps)(ShowShift)
export default ShowShift