
import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,
Form,FormGroup, Label, Input,
Table, Pagination, PaginationItem,   PaginationLink,
InputGroup, InputGroupAddon
} from 'reactstrap';
import classnames from 'classnames';
import { Link} from 'react-router-dom';
import AddEmployee from '../AddEmployees/AddEmployees';
import Position from '../Positions/Positions';
import * as apis from '../../../api';
import axios from 'axios';

class EditEmployees extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      user: {}
    };
  }

  componentWillMount() {
    const id = this.props.match.params.userId;
    const url = '/users/' + id
    apis.getData(url)
      .then(value => value.user)
      .then(user => {
        this.setState({user});
      })
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const {user} = this.state
    return (
      <div>
        <Nav tabs className="bg-light">
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}onClick={() => { this.toggle('1'); }}>
            <div className="text-blayn"><strong>Nhân viên</strong></div>   
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}onClick={() => { this.toggle('2'); }}>
            <div className="text-blayn"><strong>Thêm nhân viên</strong></div>   
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '3' })}onClick={() => { this.toggle('3'); }}>
            <div className="text-blayn"><strong>Nhóm nhân viên</strong></div>   
            </NavLink>
          </NavItem>
        </Nav>
          <TabContent activeTab={this.state.activeTab} className="border-bottom-0">
            <TabPane tabId="1">
              <Row>
                <Col xs="12" sm="6">
                <h5 className="text-blayn">Sửa nhân viên</h5>
                </Col>
                <Col xs="12" sm="6">
                <div className="text-right"><Link to="/employees"><i className="icon-action-undo"></i> Quay lại nhân viên</Link></div>
                </Col>
              </Row>
              <hr/>
              <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="text-input">Họ và tên</Label> <span className="required">*</span>
                  </Col>
                  <Col xs="12" md="5">
                    <Input type="text" id="text-input" name="text-input" placeholder="Họ và tên" onChange={(e) => {this.setState({
                      user: Object.assign({}, user, {name: e.target.value}) 
                    })}} value={user.name}/>
                  </Col>
                </FormGroup>
                {/* <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="file-input">Avatar</Label> <span className="required">*</span>
                  </Col>
                  <Col xs="12" md="5">
                    <Input  type="file" id="file-input" name="file-input"/>
                  </Col>
                </FormGroup> */}
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="exampleDate">Ngày sinh</Label> <span className="required">*</span>
                  </Col>
                  <Col md="5" xs="12">
                    <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" onChange={(e) => {this.setState({
                      user: Object.assign({}, user, {date_of_birth: e.target.value}) 
                    })}} value={user.date_of_birth}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label>Giới tính</Label> <span className="required">*</span>
                  </Col>
                  <Col md="5"xs="12">
                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" defaultChecked />
                      <Label className="form-check-label" check htmlFor="inline-radio1">Nam</Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2"/>
                      <Label className="form-check-label" check htmlFor="inline-radio2">Nữ</Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="text-input">Địa chỉ</Label> <span className="required">*</span>
                  </Col>
                  <Col xs="12" md="5">
                    <Input type="text" id="text-input" name="text-input" placeholder="Địa chỉ" onChange={(e) => {this.setState({
                      user: Object.assign({}, user, {address: e.target.value}) 
                    })}} value={user.address}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="text-input">Số điện thoại</Label> <span className="required">*</span>
                  </Col>
                  <Col xs="12" md="5">
                    <Input  type="text" id="text-input" name="text-input" placeholder="Số điện thoại" onChange={(e) => {this.setState({
                      user: Object.assign({}, user, {phone_number: e.target.value}) 
                    })}} value={user.phone_number}/>
                  </Col>
                    </FormGroup>                                    
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="email-input">Email</Label> <span className="required">*</span>
                  </Col>
                  <Col xs="12" md="5">
                    <Input  type="email" id="email-input" name="email-input" placeholder="Email" onChange={(e) => {this.setState({
                      user: Object.assign({}, user, {email: e.target.value}) 
                    })}} value={user.email}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="select">Nhóm nhân viên</Label> <span className="required">*</span>
                  </Col>
                  <Col xs="12" md="5">
                    <Input  type="select" name="select" id="select">
                      <option value="1">Quản lý</option>
                      <option value="2">Phục vụ</option>
                      <option value="3">Bảo vệ</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="select">Status</Label> <span className="required">*</span>
                  </Col>
                  <Col xs="12" md="1">
                  <Label className="switch switch-sm switch-text switch-primary">
                    <Input type="checkbox" className="switch-input"/>
                    <span className="switch-label" data-on="On" data-off="Off"></span>
                    <span className="switch-handle"></span>
                  </Label>
                  </Col>
                </FormGroup> 
                <Button type="button"  color="primary" onclick={()=> {console.log(document.getElementById('inline-radio1').value)}}>Add</Button>
                <Button color="secondary">Cancel</Button>
              </Form>
            </TabPane>
          <TabPane tabId="2">
            <AddEmployee/>
          </TabPane>
          <TabPane tabId="3">
            <Position/>
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

export default EditEmployees;
