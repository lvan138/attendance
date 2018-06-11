import React, {Component} from 'react';
import {
Nav, NavItem, NavLink, TabContent, TabPane, Form, Row, Col, FormGroup, Label, Input, Button
} from 'reactstrap';
import classnames from 'classnames';
import {connect} from 'react-redux'
import { Field, reduxForm, formValueSelector, reset} from 'redux-form'
import {updatePassword} from '../../redux/actions/password'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const renderField = ({ input, placeholder, type, className,min,max,rows, meta: { touched, error, warning } }) => (
  <div>
        <Input {...input} placeholder={placeholder} className={className} type={type} rows={rows}/>
        {touched && ((error && <span className="required">{error}</span>))}
  </div>
)

class ChangePassword extends Component {

  handleFormSubmit({current_pass, new_pass, retype_pass}){
    this.setState({
      openDialog: true
  });
    let password= {current_pass, new_pass, retype_pass };
    this.props.dispatch(updatePassword(password)) ;
  }
  handleCloseDialog() {
    this.setState({
        openDialog: false
    });
}
  constructor(props) {
    super(props);
    this. handleFormSubmit=this.handleFormSubmit.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
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
  render() {
    const {handleSubmit, password,reset,pristine, submitting, new_pass} = this.props;
     ;console.log(new_pass);
    return (
      <div>
        <Nav tabs className="bg-light">
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}onClick={() => { this.toggle('1'); }}>
            <div className="text-blayn"><strong>Đổi mật khẩu</strong></div>   
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="border-bottom-0 border-left-0 border-right-0">
          <TabPane tabId="1">
            <h5 className="text-blayn">Đổi mật khẩu</h5>
            <div>Nhập mật khẩu cũ, và mật khẩu mới để đổi mật khẩu</div>       
            <Form  onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className=" col-xs-12 col-sm-12 col-md-6  bg-light">
            <br/>
              <Row>
                <Col xs="12">
                <FormGroup>
                    <Label htmlFor="name" className="text-blayn">Mật khẩu cũ</Label>
                    <Row>
                    <Col xs="12" sm="12">
                   
                    <Field type="password" name="current_pass" placeholder="Mật khẩu cũ" component={renderField}/>
                    </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="name" className="text-blayn">Mật khẩu mới</Label>
                    <Row>
                    <Col xs="12" sm="12">
                   
                    <Field type="password" name="new_pass" placeholder="Mật khẩu mới" component={renderField}/>
                    
                    </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="name" className="text-blayn">Nhập lại mật khẩu mới</Label>
                    <Row>
                    <Col xs="12" sm="12">
                   <Field type="password" name="retype_pass" placeholder="Nhập lại  mật khẩu mới" component={renderField}/>
                    
                    </Col>
                    </Row>
                  </FormGroup>  
                </Col>
              </Row>
              <div className="form-actions">
              <Row>
                <Col xs="12">
                  <Button type="submit" color="primary">Save changes</Button>
                  <Button color="secondary" onClick={reset}>Cancel</Button>
                </Col>
              </Row>
              </div>
              <br/>
            </Form>
            <MuiThemeProvider>
                <Dialog open={this.state.openDialog} onRequestClose={this.handleCloseDialog}>
                    <div className='popup'>
                        Thay đổi mật khẩu thành công.
                    </div>
                </Dialog>
                </MuiThemeProvider>
          </TabPane>
        </TabContent>
      </div>
    )
  }
}
function mapStateToProps(state){
  const selector = formValueSelector('resetPassword')
  return {
    current_pass: selector(state, 'current_pass'),
    new_pass: selector(state, 'new_pass'),
    retype_pass: selector(state, 'retype_pass'),
  }
  
}

const afterSubmit = (result, dispatch) =>{
  dispatch(reset('resetPassword'));
  // window.alert("Gửi đơn xin nghỉ việc thành công.");
}

ChangePassword= reduxForm({
  form:'resetPassword',
  fields:['current_pass','new_pass','retype_pass'],
  
})( ChangePassword)

ChangePassword= connect(mapStateToProps)( ChangePassword)

export default ChangePassword