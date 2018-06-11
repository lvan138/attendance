import React, {Component} from 'react';
import {Route, Link,Redirect} from 'react-router-dom';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon, InputGroupText,
  Form, FormGroup} from 'reactstrap';
import login from '../../../routes';
import * as actions from '../../../redux/actions/auth';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { formValueSelector } from 'redux-form'

const renderField = ({ input, placeholder, type, className }) => (
  
      <Input {...input} placeholder={placeholder} className={className} type={type} required/>
  
)

class Login extends Component {
  handleFormSubmit({email, password}) {
    console.log(email);
    console.log(password);
    this.props.loginRequest({email, password});
  }

  render() {
    const { handleSubmit, email } = this.props;
    console.log(email)
    return (
      <div className="app-login flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="5">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1 className="text-center">BLAYN</h1>
                    <p className="text-muted">Nhập tài khoản để đăng nhập vào hệ thống</p>
                    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                      <FormGroup>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="fa fa-envelope"></i></InputGroupText>
                          </InputGroupAddon>
                          <Field name='email' component={renderField} type="email" placeholder='Email' />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                          </InputGroupAddon>
                          <Field name='password' component={renderField} type="password" placeholder='Password' />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="form-actions">
                        {/* <Button type="submit" size="sm" color="primary">Submit</Button> */}
                        <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" type="submit">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0"><Link to="/forgot-password">Forgot password?</Link></Button>
                        </Col>
                        </Row>
                      </FormGroup>
                    </form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const   selector = formValueSelector('login')
  return {
    email: selector(state, 'email'),
    password: selector(state, 'passsword'),
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error
  }
}

Login = reduxForm({
  form: 'login',
  fields: ['email', 'password']
})(Login);

Login = connect(mapStateToProps, actions)(Login);

export default Login;
