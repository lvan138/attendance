import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,
Form,FormGroup, Label, Input  } from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector, reset} from 'redux-form'
import * as apis from '../../api'
import {createLeaveShiftRequest} from '../../redux/actions/leaveShiftRequest'
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

class LeaveShiftRequest extends Component {

  //của xin nghỉ ca
  handleFormSubmit({description}){
    this.setState({
      openDialog: true
    });
    let old_shift_id= this.props.id;
    let leaveShiftRequest = {old_shift_id, description};
    this.props.dispatch(createLeaveShiftRequest(leaveShiftRequest)) ;
   }

   handleCloseDialog() {
    this.setState({
        openDialog: false
    });
}

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this. handleFormSubmit=this. handleFormSubmit.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.state = {
      activeTab: '1',
      date: null,
      name: null,
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

    const {handleSubmit, leaveShiftRequest, reset,pristine, submitting} = this.props;
    return (
      <div>
            <h5 className="text-blayn">Đơn xin nghỉ ca</h5>
            <Form  onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className=" col-xs-12 col-sm-12 col-md-6  bg-light">
            <br/>
              <Row>
                <Col xs="12">
                <FormGroup>
                    <Label htmlFor="name" className="text-blayn">Ngày có ca xin nghỉ</Label>
                    <Row>
                    <Col xs="12" sm="12">
                    <Input type="date" id="date" value={this.props.date} readOnly/>
                    </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="name" className="text-blayn">Ca xin nghỉ</Label>
                    <Row>
                    <Col xs="12" sm="12">
                    <Input type="text" id="shift-now" value={this.props.name}  readOnly />
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
                  <Button type="submit" color="primary"
                                >Save changes</Button>
                  <Button color="secondary"onClick={reset}>Cancel</Button>
                </Col>
              </Row>
              </div>
              <br/>
            </Form>
            <MuiThemeProvider>
                <Dialog open={this.state.openDialog} onRequestClose={this.handleCloseDialog}>
                    <div className='popup'>
                        Bạn đã gửi đơn xin nghỉ ca thành công.
                    </div>
                </Dialog>
                </MuiThemeProvider>
      </div>
    )
  }
}
//xin nghỉ ca
function mapStateToProps(state){
  const selector = formValueSelector('createLeaveShiftRequest')
  return {
    
    description: selector(state, 'description'),
  }
  
}

const afterSubmit = (result, dispatch) =>{
  dispatch(reset('createLeaveShiftRequest'));
  // window.alert("Gửi đơn xin nghỉ ca thành công");
}

LeaveShiftRequest = reduxForm({
  form:'createLeaveShiftRequest',
  fields:['description'],
  onSubmitSuccess: afterSubmit,
}
)(LeaveShiftRequest)


LeaveShiftRequest = connect(mapStateToProps)(LeaveShiftRequest)

export default LeaveShiftRequest;
