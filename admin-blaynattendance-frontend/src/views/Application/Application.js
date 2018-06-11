import React from 'react'

import {Col,Row,Breadcrumb,BreadcrumbItem,  TabContent, TabPane, Nav, NavItem, NavLink,Table, Card, CardBody,CardHeader }from 'reactstrap'
import {Link} from 'react-router-dom'
import classnames from 'classnames'
import ListFeedbacks from './ListFeedbacks'
import DonXinChuyenCa from './DonXinChuyenCa'
import DonXinNghiCa from './DonXinNghiCa'
import DonXinUngLuong from './DonXinUngLuong'
import DonXinNghiViec from './DonXinNghiViec'
import { connect } from 'react-redux'
import { getRequest } from '../../redux/actions/requests';
 

class Application extends React.Component{
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
      this.props.dispatch(getRequest())
    }
    render(){
      const{ requests } = this.props;
      const payrollRequest = requests.payrollRequest
      const feedback = requests.feedback
      const leaveRequest = requests.leaveRequest

      const changeShiftRequest = requests.shiftRequest.filter(x => x.request_type_id == 1)
      const leaveShiftRequest = requests.shiftRequest.filter(x => x.request_type_id == 2)

      return(
        <div>
        <Nav tabs className="bg-light">
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}onClick={() => { this.toggle('1'); }}>
            <div className="text-blayn"><strong> Đơn xin chuyển ca</strong></div>   
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}onClick={() => { this.toggle('2'); }}>
            <div className="text-blayn"><strong> Đơn xin nghỉ ca</strong></div>   
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '3' })}onClick={() => { this.toggle('3'); }}>
            <div className="text-blayn"><strong> Đơn xin ứng lương</strong></div>   
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '4' })}onClick={() => { this.toggle('4'); }}>
            <div className="text-blayn"><strong> Đơn xin nghỉ việc</strong></div>   
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '5' })}onClick={() => { this.toggle('5'); }}>
            <div className="text-blayn"><strong> Danh sách phản hồi</strong></div>   
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="border-bottom-0 border-left-0 border-right-0">
          <TabPane tabId="1">
            <DonXinChuyenCa changeShiftRequest={changeShiftRequest}/>
          </TabPane>
          <TabPane tabId="2">
            <DonXinNghiCa leaveShiftRequest={leaveShiftRequest}/>
          </TabPane>
          <TabPane tabId="3">
            <DonXinUngLuong payrollRequest={payrollRequest}/>
          </TabPane>
          <TabPane tabId="4">
            <DonXinNghiViec leaveRequest={leaveRequest}/>
          </TabPane>
          <TabPane tabId="5">
            <ListFeedbacks feedback={feedback}/>
          </TabPane>
        </TabContent>
      </div>
        )
    }
}

const mapStateToProps = state => ({
    requests: state.requests 
})
Application = connect(mapStateToProps)(Application)
export default Application