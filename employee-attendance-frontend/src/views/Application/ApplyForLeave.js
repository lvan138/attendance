import React, {Component} from 'react'
import {Row,Col, Form, FormGroup,Label,Input,Button} from 'reactstrap'

import {connect} from 'react-redux'
import { Field, reduxForm, formValueSelector, reset} from 'redux-form'
import {createLeaveRequest} from '../../redux/actions/leaveRequest'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//validate
const validate = values => {
    const errors = {}
    if (!values.day) {
      errors.day = 'Yêu cầu nhập ngày xin nghỉ việc.'
    }
    if (!values.description) {
      errors.description = 'Yêu cầu nhập lý do đơn xin nghỉ việc.'
    }
    return errors
  }

//

const renderField = ({ input, placeholder, type, className,min,max,rows, meta: { touched, error, warning } }) => (
    <div>
          <Input {...input} placeholder={placeholder} className={className} type={type} rows={rows}/>
          {touched && ((error && <span className="required">{error}</span>))}
    </div>
)
//Tạo đơn xin nghỉ việc
class ApplyForLeave extends Component{

    handleFormSubmit({day, description}){
        this.setState({
            openDialog: true
        });
        let leaveRequest = {day,description };
        this.props.dispatch(createLeaveRequest(leaveRequest)) ;
    }
    handleCloseDialog() {
        this.setState({
            openDialog: false
        });
    }

    constructor(props) {
        super(props);     
        this. handleFormSubmit=this. handleFormSubmit.bind(this);
        this.state = {};
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }

    render(){
        const { day, description,handleSubmit, leaveRequest,reset,pristine, submitting} = this.props;
        console.log(day);
        console.log(description);
        return (
            <div>
                <h5 className="text-blayn">Đơn xin nghỉ việc</h5>
                {/* <div className="text-muted" >Lưu ý: Đơn xin nghỉ</div>  */}
                <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className=" col-xs-12 col-sm-12 col-md-6  bg-light">
                <br/>
                <Row>
                    <Col xs="12">
                    <FormGroup>
                        <Label htmlFor="name" className="text-blayn">Ngày bắt đầu xin nghỉ việc </Label><span className="required"> *</span>
                        <Row>
                        <Col xs="12" sm="12">
                        <Field type="date" id="day" name="day" component={renderField}/>            
                        </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="name" className="text-blayn">Lý do </Label><span className="required"> *</span>
                        <Row>
                        <Col xs="12" sm="12">
                        <Field type="textarea" name="description" id="description" rows="5"
                                placeholder="Lý do xin nghỉ việc" component={renderField}/>            
                        
                        </Col>
                        </Row>
                    </FormGroup>
                    </Col>
                </Row>
                <div className="form-actions">
                <Row>
                    <Col xs="12">
                    <Button type="submit" color="primary" disabled={submitting}>Gửi</Button>
                    <Button color="secondary" disabled={pristine || submitting} onClick={reset}>Cancel</Button>
                    </Col>
                </Row>
                </div>
                <br/>
                </Form>
                <MuiThemeProvider>
                <Dialog open={this.state.openDialog} onRequestClose={this.handleCloseDialog}>
                    <div className='popup'>
                        Bạn đã gửi đơn xin nghỉ việc thành công.
                    </div>
                </Dialog>
                </MuiThemeProvider>
            </div>
        )
    }
}

function mapStateToProps(state){
    const selector = formValueSelector('createLeaveRequest')
    return {
      day: selector(state, 'day'),
      description: selector(state, 'description'),
    }
    
}
  
const afterSubmit = (result, dispatch) =>{
    dispatch(reset('createLeaveRequest'));
    // window.alert("Gửi đơn xin nghỉ việc thành công.");
}

ApplyForLeave = reduxForm({
    form:'createLeaveRequest',
    fields:['day','description'],
    validate,
    onSubmitSuccess: afterSubmit,
  })(ApplyForLeave)
  
ApplyForLeave = connect(mapStateToProps)(ApplyForLeave)

export default ApplyForLeave;
