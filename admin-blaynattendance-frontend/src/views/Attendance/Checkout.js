import React from 'react'

import {Col,Row,Breadcrumb,BreadcrumbItem,  TabContent, TabPane, 
Nav, NavItem, NavLink,Table, Card, CardBody,CardHeader,
Form, FormGroup,Label,Input,Button, Alert}from 'reactstrap'
import {Link} from 'react-router-dom'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { getAttendance, checkOut } from '../../redux/actions/attendance'
import { getUser } from '../../redux/actions/users';
import { getShift } from '../../redux/actions/shiftMasters';

class Checkout extends React.Component{
    // componentDidMount() {
    //     this.props.dispatch(getAttendance())
    //     this.props.dispatch(getUser(true))
    //     this.props.dispatch(getShift(true))
    // }
    constructor(props) {
        super(props);
    
        this.handleChangeEmployee = this.handleChangeEmployee.bind(this)
        this.onDismiss = this.onDismiss.bind(this)

        this.state = {
            visible: true,
          shift_employee: [],
          employee_id: null
        };
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    componentWillReceiveProps(nextProps) {
        let shift_employee = []
        let employee_id = 0
  
        if (nextProps.users[0] && nextProps.attendance) {
            employee_id = nextProps.users[0].id
            const notCheckOutAttendance = nextProps.attendance.filter(x => !x.out_time && x.employee_id === employee_id ).map(x => x.shift_id)
            
            let  shifts = nextProps.shifts.filter(shift => shift.employees.includes(employee_id))
            shift_employee = shifts.filter(shift => notCheckOutAttendance.includes(shift.id))           
        }
        this.setState ({
          shift_employee,
          employee_id

        });
    }

    handleChangeEmployee(e) {
        const employee_id = e.target.value
        const notCheckOutAttendance = this.props.attendance.filter(x => !x.out_time && x.employee_id == employee_id ).map(x => x.shift_id)
        let  shifts = this.props.shifts.filter(shift => shift.employees.includes(parseInt(employee_id)))
        let  shift_employee = shifts.filter(shift => notCheckOutAttendance.includes(shift.id)) 

        this.setState ({
            shift_employee,
            employee_id
        });
    }

    render() {
        const { attendance, users, shifts, dispatch, message} = this.props;

        return (
            <div>
                <div className="text-blayn text-right"><Link to="cham-cong"><i className="fa fa-arrow-left"> Bảng chấm công</i></Link></div>
                <hr/>
                {
                    message.success !== null ? 
                    (<Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                        {message.success}
                    </Alert>) : ''
                }
                <Form className="col-12 bg-light">
                <br/>
                <Row>
                    <Col xs="3"> <div className="text-blayn"><strong>Thông tin chấm công</strong></div><div>Nhập thông tin để tiến hành chấm công ra hệ thống</div></Col>
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
                                ): ''
                            }
                        </Input>
                        </Col>
                        <Col xs="12" sm="12">
                        <Input type="select" name="ca" id="shift_id">
                            {this.state.shift_employee.map(
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
                                let employee_id = this.state.employee_id;
                                let shift = document.getElementById('shift_id')
                                let shift_id = shift.options[shift.selectedIndex].value;
                                dispatch(checkOut({employee_id, shift_id}))
                            }}>Chấm công ra</Button>
                            </Col>
                        </Row>
                    </div>  
                    </Col>
                </Row>
                
                <br/>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users,
    shifts: state.shifts,
    attendance: state.attendance,
    message: state.message
})

Checkout = connect(mapStateToProps)(Checkout)
export default Checkout