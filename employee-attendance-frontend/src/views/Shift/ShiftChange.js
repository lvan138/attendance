import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,
Form,FormGroup, Label, Input  } from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector, reset} from 'redux-form'
import * as apis from '../../api'
import LeaveShiftRequest from './LeaveShiftRequest'
import {createChangeShiftRequest} from '../../redux/actions/changeShiftRequest'
import { getShiftInDay } from '../../redux/actions/shiftsInDay'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const validate = values => {
  const errors = {}
  if (!values.shift_change_id) {
    errors.shift_change_id = 'Yêu cầu nhập ca để xin chuyển.'
  }
  return errors
}

const renderField = ({ input, placeholder, type, className,min,max,rows, meta: { touched, error, warning } }) => (
  <div>
        <Input {...input} placeholder={placeholder} className={className} type={type} rows={rows}/>
        {touched && ((error && <span className="required">{error}</span>))}
  </div>
)
const renderField1 = ({ input, placeholder, type, className,min,max,rows, meta: { touched, error, warning } }) => (
<div>
      <Input {...input} placeholder={placeholder} className={className} type={type} rows={rows}></Input>
      {touched && ((error && <span className="required">{error}</span>))}
</div>
)
const renderSelect = ({ input, placeholder, type, className, render,meta: { touched, error, warning } }) => (
  <div>
      <Input {...input} placeholder={placeholder} className={className} type={type}>
        {render}
       
      </Input>
      {touched && ((error && <span className="required">{error}</span>))}
  </div>
)

class ShiftChange extends Component {

  //của xin  
  handleFormChangeSubmit({shift_change_id,description}){
    this.setState({
      openDialog: true
    });
    let old_shift_id=  this.props.match.params.shiftId;
    let changeShiftRequest = {old_shift_id,shift_change_id, description};
    this.props.dispatch(createChangeShiftRequest(changeShiftRequest)) ;
  }
  handleCloseDialog() {
    this.setState({
        openDialog: false
    });
}

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this. handleFormChangeSubmit=this. handleFormChangeSubmit.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.state = {
      activeTab: '1',
      date: null,
      name: null,
      shifts:null,
    };
  }
  componentWillMount() {
    this.props.dispatch(getShiftInDay())
    const id = this.props.match.params.shiftId;
    const url = '/shifts/' + id;
    apis.getData(url).then(value => value.shift)
                                    .then(shift => this.setState({
                                        date: shift.date,
                                        name: shift.name,
                                        id:shift.id
                                    }))
    
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const id= this.props.match.params.shiftId
    
    const {handleSubmit,reset,pristine, submitting,changeShiftRequest} = this.props;
    const {  shiftsInDay } = this.props
    
    let shifts = shiftsInDay.filter(x => x.date == this.state.date && x.id != id)
    console.log(shifts)
    return (
      <div>
        <Nav tabs className="bg-light">
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}onClick={() => { this.toggle('1'); }}>
            <div className="text-blayn"><strong>Đơn xin chuyển ca</strong></div>   
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}onClick={() => { this.toggle('2'); }}>
            <div className="text-blayn"><strong>Đơn xin nghỉ ca</strong></div>   
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="border-bottom-0 border-left-0 border-right-0">
          <TabPane tabId="1">
          <div >
        <h5 className="text-blayn">Đơn xin thay đổi ca</h5>
            <Form  onSubmit={handleSubmit(this.handleFormChangeSubmit.bind(this))} className=" col-xs-12 col-sm-12 col-md-6  bg-light">
            <br/>
              <Row>
                <Col xs="12">
                <FormGroup>
                    <Label htmlFor="name" className="text-blayn">Ngày xin thay đổi ca</Label>
                    <Row>
                    <Col xs="12" sm="12">
                    <Input type="date" id="date" value={this.state.date}readOnly/>
                    </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="name" className="text-blayn">Ca hiện tại</Label>
                    <Row>
                    <Col xs="12" sm="12">
                    <Input type="text" id="shift-now"  value={this.state.name} readOnly />
                    </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="name" className="text-blayn">Xin thay đổi sang ca</Label>
                    <Row>
                    <Col xs="12" sm="12">
                    <Field type="select" name="shift_change_id"  component={renderSelect}
                 
                   render={
                      shifts.map(item=> (
                        <option value={item.id}>{item.name}</option>
                      ))
                    }>
                  </Field>

{/*                   
                     <Field type="number" name="shift_change_id" 
                             placeholder="" component={renderField}/>  */}
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
                        Bạn đã gửi đơn xin thay đổi ca thành công.
                    </div>
                </Dialog>
                </MuiThemeProvider>
      </div>
           </TabPane>
          <TabPane tabId="2">
            < LeaveShiftRequest date={this.state.date} name={this.state.name}  id={this.state.id}/>  
          </TabPane>
        </TabContent>
      </div>
    )
  }
}
//xin chuyển ca
function mapStateToProps(state){
  const selector = formValueSelector('createChangeShiftRequest')
  return {
    shift_change_id: selector(state,'shift_change_id'),
    description: selector(state, 'description'),
    shiftsInDay: state.shiftsInDay
  }
  
}

const afterSubmit = (result, dispatch) =>{
dispatch(reset('createChangeShiftRequest'));
// window.alert("Gửi đơn xin nghỉ ca thành công");
}

ShiftChange = reduxForm({
form:'createChangeShiftRequest',
fields:['shift_change_id,description'],
onSubmitSuccess: afterSubmit,
validate,
}
)(ShiftChange)


ShiftChange = connect(mapStateToProps)(ShiftChange)
export default ShiftChange;
