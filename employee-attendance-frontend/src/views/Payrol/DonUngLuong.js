import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,
Form,FormGroup, Label, Input, Alert } from 'reactstrap';
import classnames from 'classnames';
import {connect} from 'react-redux'
import { Field, reduxForm, formValueSelector, reset} from 'redux-form'
import {createPayrolRequest} from '../../redux/actions/payrolRequest'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const validate = values => {
  const errors = {}
  if (!values.time) {
    errors.time = 'Yêu cầu nhập ngày xin ứng lương.'
  }
  if (!values.amount) {
    errors.amount = 'Yêu cầu nhập số tiền xin ứng.'
  }else if (Number(values.amount) <= 0) {
    errors.amount = 'Yêu cầu nhập số tiền lớn hơn 0'
  } else if (Number(values.amount) >3000000) {
    errors.amount = 'Yêu cầu nhập số tiền nhỏ hơn 3 000 000 VNĐ'
  } else if (Number(values.amount)%1000) {
    errors.amount = 'Yêu cầu nhập số tiền là bội của 1 000'
  }
  return errors
}

const renderField = ({ input, placeholder, type, className,min,max,rows, meta: { touched, error, warning } }) => (
  <div>
        <Input {...input} placeholder={placeholder} className={className} type={type} rows={rows}/>
        {touched && ((error && <span className="required">{error}</span>))}
  </div>
)

class DonUngLuong extends Component {

  handleFormSubmit({time, amount, description}){
    this.setState({
      openDialog: true
    });
    let payrolRequest = {time, amount, description};
    this.props.dispatch(createPayrolRequest(payrolRequest)) ;
    // then((success) => Promise.resolve({_success: success.message}));
  }
  handleCloseDialog() {
    this.setState({
        openDialog: false
    });
  }
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this. handleFormSubmit=this. handleFormSubmit.bind(this)
    this.state = {
      activeTab: '1',
    };
 
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const { handleSubmit, payrolRequest,reset,pristine, submitting} = this.props;
    return (
      <div>
        <Nav tabs className="bg-light">
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}onClick={() => { this.toggle('1'); }}>
            <div className="text-blayn"><strong>Xin ứng lương</strong></div>   
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="border-bottom-0 border-left-0 border-right-0">
          <TabPane tabId="1">
            <h5 className="text-blayn">Đơn xin ứng lương</h5>
            <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className=" col-xs-12 col-sm-12 col-md-6  bg-light">
              <br/>
              {/* <Alert color="primary">{this.props.submit}</Alert> */}
              <Row>
                <Col xs="12">
                <FormGroup>
                <Label htmlFor="name" className="text-blayn">Ngày xin ứng lương</Label><span className="required">*</span>
                <Row>
                <Col xs="12" sm="12">
               
                <Field type="date" id="time" name="time" placeholder="" component={renderField}/>
                </Col>
                </Row>
                </FormGroup>
                <FormGroup>
                <Label htmlFor="name" className="text-blayn">Số tiền xin ứng (Số tiền ứng nhỏ hơn 3 000 000VND)</Label><span className="required">*</span>
                <Row>
                <Col xs="12" sm="12">  
                <Field type="number" id="amount" name="amount" component={renderField}/>
                </Col>
                </Row>
                </FormGroup>
                <FormGroup>
                <Label htmlFor="name" className="text-blayn">Lý do</Label>
                <Row>
                <Col xs="12" sm="12">
                 <Field type="textarea" name="description" id="description" rows="3"
                        placeholder="" component={renderField}/>
                </Col>
                </Row>
                </FormGroup>
                  
                </Col>
              </Row>
              <div className="form-actions">
                <Row>
                    <Col xs="12">
                    <Button type="submit" color="primary" disabled={submitting} >Gửi</Button>
                    <Button color="secondary" disabled={pristine || submitting} onClick={reset}>Cancel</Button>
                    </Col>
                </Row>
              </div>
              <br/>
            </Form>
            <MuiThemeProvider>
                <Dialog open={this.state.openDialog} onRequestClose={this.handleCloseDialog}>
                    <div className='popup'>
                        Bạn đã gửi đơn xin ứng lương thành công.
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
  const selector = formValueSelector('createPayrolRequest')
  return {
    time: selector(state, 'time'),
    amount: selector(state, 'amount'),
    description: selector(state, 'description'),
  }
  
}

const afterSubmit = (result, dispatch) =>{
  // dispatch(reset('createPayrolRequest'));
  // window.alert("sumit form thanh cong");
}
DonUngLuong = reduxForm({
  form:'createPayrolRequest',
  fields:['time','amount','description'],
  validate,
  onSubmitSuccess: afterSubmit,
})(DonUngLuong)

DonUngLuong = connect(mapStateToProps)(DonUngLuong)
export default DonUngLuong;
