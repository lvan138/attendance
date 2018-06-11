import React, {Component} from 'react'
import {Button, Nav, NavItem, NavLink, TabContent, TabPane, Row,Col,Input,Form, FormGroup, Label, Alert} from 'reactstrap'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { getUser } from '../../../../redux/actions/users'
import { getUserGroup } from '../../../../redux/actions/userGroups'
import * as apis from '../../../../api'
import { formatDate } from '../../../../helper/formatDate'
import { clearMessage } from '../../../../redux/actions/message';

class XepCa extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.onDismiss = this.onDismiss.bind(this)
        this.state = {
            visible: true,
            activeTab: '1',
            date: null,
            name: null
        };
    }
    
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
            activeTab: tab
            });
        }
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    componentWillMount() {
        this.props.dispatch(getUser());
        this.props.dispatch(getUserGroup());
        this.props.dispatch(clearMessage())
        const id = this.props.match.params.shiftId
        const url = '/shifts/' + id
        apis.getData(url).then(value => value.shift)
                                        .then(shift => this.setState({
                                            date: shift.date,
                                            name: shift.name
                                        }))
    }
    render(){
        const id = this.props.match.params.shiftId
        const { userGroups, users, dispatch, message } = this.props
        const visibleUsers = users.filter(user => user.status == 1)
        return(
            <div>
                <Nav tabs className="bg-light">
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '1' })}onClick={() => { this.toggle('1'); }}>
                        <div className="text-blayn"><strong>Xếp ca</strong></div>   
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab} className="border-bottom-0">
                    <TabPane tabId="1">
                    <h5 className="text-blayn">Ngày {this.state.date ? formatDate(this.state.date) : ''} {this.state.name}</h5>
                    <hr/>
                    {
                        message.success !== null ? 
                        (<Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                            {message.success}
                        </Alert>) : ''
                    }
                    <Row>
                    <Col xs="12" sm="12">
                      <div className="border-0 bg-light">
                      <Form>
                        { userGroups.map(userGroup => (
                            <div>
                            <Row className="text-search-alpha">
                            <Col xs="12" sm="2">
                                <strong>{userGroup.name}</strong>
                            </Col>
                            <Col xs="12" sm="10">
                                <div >
                                    {visibleUsers.filter(visibleUser => visibleUser.user_group_id == userGroup.id).map(
                                        user => (
                                            <FormGroup check inline>
                                                {user.shifts.indexOf(parseInt(id)) > -1 ?
                                                    (<Input className="form-check-input" type="checkbox" id="inline-checkbox2" name="employees[]" value={user.id} defaultChecked/>)
                                                    :
                                                    (<Input className="form-check-input" type="checkbox" id="inline-checkbox2" name="employees[]" value={user.id}/>)}
                                                <Label className="form-check-label" check htmlFor="inline-checkbox2">{user.name}</Label>
                                            </FormGroup>
                                        )
                                    )}
                                </div>
                            </Col>
                            </Row>
                            <Row className="text-search">
                            <Col xs="12" sm="12"><div className="line"></div></Col>
                            </Row>
                            </div>
                        ))}                        
                        <Row  className="text-search">
                            <Col xs="12" sm="5">
                            <Button onClick={() => {
                                var employees = []
                                var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
                                
                                for (var i = 0; i < checkboxes.length; i++) {
                                  employees.push(checkboxes[i].value)
                                }
                                
                                dispatch({
                                    type: 'SCHEDULE_SHIFT',
                                    id: id,
                                    employees: employees
                                })
                            }} color="primary">Save changes</Button> &nbsp;&nbsp;
                            <Button className="btn-canel1">Cancel</Button>
                            </Col>
                        </Row>
                        <br/>
                      </Form>
                      </div>
                    </Col>
                  </Row>
                    </TabPane>
                </TabContent> 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users,
    userGroups: state.userGroups,
    message: state.message
})

XepCa = connect(mapStateToProps)(XepCa)
export default XepCa