import React from 'react'

import {Col,Row,Breadcrumb,BreadcrumbItem,  TabContent, TabPane, Nav, NavItem, NavLink,Table, Card, CardBody,CardHeader }from 'reactstrap'
import {Link} from 'react-router-dom'
import classnames from 'classnames'
import { getAttendance } from '../../redux/actions/attendance';
import { connect } from 'react-redux'
import { getShift } from '../../redux/actions/shiftMasters';

class ShowAttendance extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      componentDidMount() {
        this.props.dispatch(getAttendance())
        this.props.dispatch(getShift())
      }

      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

    render(){
      const today = new Date()
      const { attendance, shifts } = this.props
      return(
        <div>
        <Nav tabs className="bg-light">
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}onClick={() => { this.toggle('1'); }}>
            <div className="text-blayn"><strong> Chấm công</strong></div>   
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="border-bottom-0 border-left-0 border-right-0">
          <TabPane tabId="1">
            <div className="text-blayn text-right"><Link to="/cham-cong-vao"><i className="fa fa-pencil"> Chấm công</i></Link></div>
            <hr/>
            <Card>
              <CardHeader className="text-center text-blayn">
                  <strong>BẢNG CHẤM CÔNG</strong>
                  <br/>
                  Ngày {today.getDate()}/{today.getMonth()+1}/{today.getFullYear()}
                  <br/>
              </CardHeader>
              <CardBody>
                  <Table bordered hover responsive>
                      <thead>
                          <tr>
                              <th>Tên nhân viên</th>
                              <th>Ca</th>
                              <th>Thời gian Vào</th>
                              <th>Thời gian Ra</th>
                          </tr>
                      </thead>
                      <tbody>
                          {attendance.map(
                            item => {
                              return (
                                <tr>
                                    <td>{item.employee}</td>
                                    <td>{item.shift_name}</td>
                                    <td>{item.in_time ? item.in_time.split(' ')[1] : ''}</td>
                                    <td>{item.out_time ? item.out_time.split(' ')[1] : ''}</td>
                                </tr>
                              )
                            })
                          }
                      </tbody>
                  </Table>
              </CardBody>
            </Card>
          </TabPane>
        </TabContent>
      </div>
        )
    }
}
const mapStateToProps = state => ({
  attendance: state.attendance,
  shifts: state.shifts
})
ShowAttendance = connect(mapStateToProps)(ShowAttendance)
export default ShowAttendance