import React from 'react'

import {Col,Row,Breadcrumb,BreadcrumbItem,  TabContent, TabPane, 
Nav, NavItem, NavLink,Table, Card, CardBody,CardHeader,
Form, FormGroup,Label,Input,Button, Alert}from 'reactstrap'
import {Link} from 'react-router-dom'
import classnames from 'classnames'
import Checkout from './Checkout'
import { connect } from 'react-redux'
import { getUser } from '../../redux/actions/users';
import { getShift } from '../../redux/actions/shiftMasters';
import { checkIn } from '../../redux/actions/attendance';
import { getAttendance } from '../../redux/actions/attendance'
import { clearMessage } from '../../redux/actions/message';

class ChamCongVao extends React.Component{
    componentDidMount() {
      this.props.dispatch(getUser(true))
      this.props.dispatch(getShift(true))
      this.props.dispatch(getAttendance())
      this.props.dispatch(clearMessage())
    }

    componentWillReceiveProps(nextProps) {
      let employee_shift = []

      if (nextProps.users.length > 0) {
        const id = nextProps.users[0].id
        employee_shift = nextProps.shifts.filter(shift => shift.employees.includes(parseInt(id)))
      }
      this.setState ({
        employee_shift
      });
    }
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.handleChangeEmployee = this.handleChangeEmployee.bind(this)
        this.onDismiss = this.onDismiss.bind(this)

        this.state = {
          activeTab: '1',
          visible: true,
          employee_shift: [],
        };
      }
    
      onDismiss() {
        this.setState({ visible: false });
      }

      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

    handleChangeEmployee(e) {
      const id = e.target.value
      let employee_shift = this.props.shifts.filter(shift => shift.employees.includes(parseInt(id)))
      this.setState ({
        employee_shift
      });
    }

    render(){
      const { users, shifts, dispatch, message } = this.props;
      let { employee_shift } = this.state;

      return(
        <div>
        <Nav tabs className="bg-light">
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}onClick={() => { this.toggle('1'); }}>
            <div className="text-blayn"><strong> Chấm công vào</strong></div>   
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}onClick={() => { this.toggle('2'); }}>
            <div className="text-blayn"><strong> Chấm công ra</strong></div>   
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="border-bottom-0 border-left-0 border-right-0">
          <TabPane tabId="1">
            {/* CHấm công vào */}
            <div className="text-blayn text-right"><Link to="cham-cong"><i className="fa fa-arrow-left"> Bảng chấm công</i></Link></div>
            <hr/>
            {
              message.error !== null ? 
              (<Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
                {message.error}
              </Alert>) : ''
            }
            {
                message.success !== null ? 
                (<Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                    {message.success}
                </Alert>) : ''
            }
            <Form className="col-12 bg-light">
            <br/>
              <Row>
                <Col xs="3"> <div className="text-blayn"><strong>Thông tin chấm công</strong></div><div>Nhập thông tin để tiến hành chấm công vào hệ thống</div></Col>
                <Col xs="3">
                <FormGroup>
                    {/* <Label htmlFor="name" className="text-blayn">Ca</Label> */}
                    <Row>
                    <Col xs="12" sm="12">
                    <Input type="select" name="name" id="employee_id" onChange={this.handleChangeEmployee}>
                        {users ? users.map(
                          user => (
                            <option value={user.id}>{user.name}</option>
                          )
                        ): ''}
                    </Input>
                    </Col>
                    <Col xs="12" sm="12">
                    <Input type="select" name="shift" id="shift_id">
                        {employee_shift.map(
                          shift => (
                            <option value={shift.id}>{shift.name} ( {shift.start_time} - {shift.end_time})</option>
                          )
                        )}
                    </Input>
                    </Col>
                    </Row>
                </FormGroup>
                <div className="form-actions">
                    <Row className="text-left">
                        <Col>
                        <Button type="button" color="primary" onClick={() => {
                           let employee = document.getElementById('employee_id')
                           let employee_id = employee.options[employee.selectedIndex].value;
                           let shift = document.getElementById('shift_id')
                           let shift_id = shift.options[shift.selectedIndex].value;
                           dispatch(checkIn({employee_id, shift_id}))
                        }}>Chấm công vào</Button>
                        </Col>
                    </Row>
                </div>  
                </Col>
              </Row>
             
              <br/>
            </Form>
          </TabPane>
          <TabPane tabId="2">
            {/* Chấm công ra */}
            <Checkout />
          </TabPane>
        </TabContent>
      </div>
        )
    }
}

const mapStateToProps = state => ({
  users: state.users,
  shifts: state.shifts,
  message: state.message
})

ChamCongVao = connect(mapStateToProps)(ChamCongVao)
export default ChamCongVao