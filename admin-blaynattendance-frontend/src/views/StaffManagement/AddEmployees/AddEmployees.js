import React, {Component} from 'react';
// import {Card, CardBody, CardHeader,CardFooter, Form, FormGroup,  Label, Input, FormText,Col, Row, Button}from 'reactstrap';
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Collapse,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector  } from 'redux-form';
import { createUser } from '../../../redux/actions/users'
 
const renderInput = ({ input, placeholder, type, className }) => (
  <div>
      <Input {...input} placeholder={placeholder} className={className} type={type}/>
  </div>
)

const renderSelect = ({ input, placeholder, type, className, render }) => (
  <div>
      <Input {...input} placeholder={placeholder} className={className} type={type}>
        {render}
      </Input>
  </div>
)

const renderCheckbox = ({ input, placeholder, type, className }) => (
  <Input {...input} placeholder={placeholder} className={className} type={type}/>
)

class AddEmployees extends Component {
  constructor(props) {
    super(props);
    this.onDismiss = this.onDismiss.bind(this)

    this.state = {
      visible: true,
    };
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  handleFormSubmit({name, user_group_id, phone_number, address, date_of_birth, email, status, gender, password}) {
    if (!user_group_id) user_group_id = this.props.userGroups[0].id
    if (!status) {
      status = 0
    } else status = 1
    let user = {name, user_group_id, phone_number, address, date_of_birth, email, status, gender, password};
    this.props.dispatch(createUser(user));
  }  
  render() {
    const { handleSubmit, userGroups, message} = this.props
    return (
      <div>
        <h5 className="text-blayn"> Thêm nhân viên</h5>
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
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="form-horizontal">
          <FormGroup row>
            <Col md="2">
              <Label htmlFor="name">Họ và tên</Label> <span className="required">*</span>
            </Col>
            <Col xs="12" md="5">
              <Field type="text" id="name" name="name" placeholder="Họ và tên" component={renderInput}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="2">
              <Label htmlFor="password">Password</Label> <span className="required">*</span>
            </Col>
            <Col xs="12" md="5">
              <Field type="password" id="password" name="password" placeholder="Password" component={renderInput}/>
            </Col>
          </FormGroup>
          {/* <FormGroup row>
            <Col md="2">
              <Label htmlFor="file-input">Avatar</Label> <span className="required">*</span>
            </Col>
            <Col xs="12" md="5">
              <Input type="file" id="file-input" name="file-input"/>
            </Col>
          </FormGroup> */}
          <FormGroup row>
            <Col md="2">
              <Label htmlFor="exampleDate">Ngày sinh</Label> <span className="required">*</span>
            </Col>
            <Col md="5" xs="12">
              <Field type="date" name="date_of_birth" id="exampleDate" placeholder="date placeholder" component={renderInput}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="2">
              <Label>Giới tính</Label> <span className="required">*</span>
            </Col>
            <Col md="5"xs="12">
              <FormGroup check inline>
                <Field className="form-check-input" type="radio" id="inline-radio1" name="gender" component={renderInput} value='1'/>
                <Label className="form-check-label" check htmlFor="inline-radio1">Nam</Label>
              </FormGroup>
              <FormGroup check inline>
                <Field className="form-check-input" type="radio" id="inline-radio2" name="gender" component={renderInput} value='0'/>
                <Label className="form-check-label" check htmlFor="inline-radio2">Nữ</Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="2">
              <Label htmlFor="address">Địa chỉ</Label> <span className="required">*</span>
            </Col>
            <Col xs="12" md="5">
              <Field type="text" id="address" name="address" placeholder="Địa chỉ" component={renderInput}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="2">
              <Label htmlFor="phone_number">Số điện thoại</Label> <span className="required">*</span>
            </Col>
            <Col xs="12" md="5">
              <Field type="text" id="phone_number" name="phone_number" placeholder="Số điện thoại" component={renderInput}/>
            </Col>
          </FormGroup>                                    
          <FormGroup row>
            <Col md="2">
              <Label htmlFor="email-input">Email</Label> <span className="required">*</span>
            </Col>
            <Col xs="12" md="5">
              <Field type="email" id="email-input" name="email" placeholder="Email" component={renderInput}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="2">
              <Label htmlFor="user-group">Nhóm nhân viên</Label> <span className="required">*</span>
            </Col>
            <Col xs="12" md="5">
              <Field type="select" name="user_group_id" id="user-group" component={renderSelect}
                render={
                  userGroups.map(userGroup => (
                    <option value={userGroup.id}>{userGroup.name}</option>
                  ))
                }>
              </Field>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="2">
              <Label htmlFor="select">Status</Label> <span className="required">*</span>
            </Col>
            <Col xs="12" md="1">
            <Label className="switch switch-sm switch-text switch-primary">
              <Field type="checkbox" className="switch-input" name='status' component={renderCheckbox}  defaultChecked/>
              <span className="switch-label" data-on="On" data-off="Off"></span>
              <span className="switch-handle"></span>
            </Label>
            </Col>
          </FormGroup> 
        <Button type="submit"  color="primary">Add</Button>
        <Button color="secondary">Cancel</Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const selector = formValueSelector('addUser')
  return {
    userGroups: state.userGroups,
    message: state.message,
    name: selector(state, 'name'),
    user_group_id: selector(state, 'user_group_id'),
    phone_number: selector(state, 'phone_number'),
    address: selector(state, 'address'),
    date_of_birth: selector(state, 'date_of_birth'),
    email: selector(state, 'email'),
    status: selector(state, 'status'),
    gender: selector(state, 'gender'),
    password: selector(state, 'password')
  }
}

AddEmployees = reduxForm({
  form: 'addUser',
  fields: ['name', 'user_group_id', 'phone_number', 'address', 'date_of_birth', 'email', 'status', 'password'] 
})(AddEmployees);

AddEmployees = connect(mapStateToProps)(AddEmployees);

export default AddEmployees