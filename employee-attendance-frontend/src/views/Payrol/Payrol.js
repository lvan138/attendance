import React from 'react'
import BigCalendar from 'react-big-calendar'
import events from './events'
import moment from 'moment'
import {Col,Row,Breadcrumb,BreadcrumbItem,  TabContent, TabPane, Nav, NavItem, NavLink }from 'reactstrap'
import {Link} from 'react-router-dom'

import classnames from 'classnames'
import BangChamCong from './BangChamCong';
import BangLichSuTienLuong from './BangLichSuTienLuong';


BigCalendar.momentLocalizer(moment);
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class Payrol extends React.Component{
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

    render(){
      return(
        <div>
        <Nav tabs className="bg-light">
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}onClick={() => { this.toggle('1'); }}>
            <div className="text-blayn"><strong>Chấm công</strong></div>   
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}onClick={() => { this.toggle('2'); }}>
            <div className="text-blayn"><strong>Lịch sử tiền lương</strong></div>   
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="border-bottom-0 border-left-0 border-right-0">
          <TabPane tabId="1">
          {/* <BigCalendar
            
            style={{height: "calc(90vh - 20px)", width:"100%"}}
            events={events}
            views={['month','agenda']}
            defaultView={'agenda'}
            defaultDate={new Date(2018,3,1)}
            step={60}
            length={29}
            showMultiDayTimes
          /> */}
          <Row>
            <Col md="2"  xs="12" sm="12">
           
           </Col>
            <Col md="8" xs="12" sm="12">
            <BangChamCong/>
            </Col>
            <Col md="2"  xs="12" sm="12">
           
            </Col>
          </Row>
          </TabPane>
          <TabPane tabId="2">
            <BangLichSuTienLuong/>
          </TabPane>
        </TabContent>
      </div>
        )
    }
}

export default Payrol