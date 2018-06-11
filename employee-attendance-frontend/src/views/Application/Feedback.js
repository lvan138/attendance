import React, {Component} from 'react'
import {Card, CardHeader, CardBody, Table, Form, FormGroup, Label, Input, Col, Row, Button} from 'reactstrap'

import {connect} from 'react-redux'
import { Field, reduxForm, formValueSelector, reset} from 'redux-form'
import {createFeedbackRequest} from '../../redux/actions/feedbackRequest'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const validate = values => {
    const errors = {}
    if (!values.title) {
      errors.title = 'Yêu cầu nhập tiêu đề.'
    }
    if (!values.content) {
      errors.content = 'Yêu cầu nhập nội dung đơn phản hồi.'
    }
    return errors
  }

const renderField = ({ input, placeholder, type, className,min,max,rows, meta: { touched, error, warning } }) => (
    <div>
          <Input {...input} placeholder={placeholder} className={className} type={type} rows={rows}/>
          {touched && ((error && <span className="required">{error}</span>))}
    </div>
)



class Feedback extends Component{

    handleFormSubmit({title, content}){
        this.setState({
            openDialog: true
        });
        let feedbackRequest = {title, content};
        this.props.dispatch(createFeedbackRequest(feedbackRequest)) ;
    }
    handleCloseDialog() {
        this.setState({
            openDialog: false
        });
    }

    
    constructor(props) {
        super(props);     
        this.state = {};
        this. handleFormSubmit=this. handleFormSubmit.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }
    render(){
        const { title, content,handleSubmit, feedbackRequest,reset,pristine, submitting} = this.props;
        console.log(title);
        console.log(content);
        return(
            <div>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className=" col-xs-12 col-sm-12 col-md-6  bg-light">
                <br/>
                <h5 className="text-blayn">Gửi ý kiến phản hồi</h5>
                Gửi ý kiến phản hồi để cho quản lý nhà hàng xử lý
                <br/>
                <Row>
                    <Col xs="12">
                    <FormGroup>
                        <Label htmlFor="name" className="text-blayn">Tiêu đề </Label><span className="required"> *</span>
                        <Row>
                        <Col xs="12" sm="12">
                        <Field type="text" id="title" name="title" placeholder="VD: Thắc mắc lương" component={renderField}/>            
                        </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="name" className="text-blayn">Nội dung </Label><span className="required"> *</span>
                        <Row>
                        <Col xs="12" sm="12">
                        <Field type="textarea" name="content" id="content" rows="5"
                                placeholder="Ghi nội dung ý kiến phản hồi" component={renderField}/>            
                        
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
                </form>
                <MuiThemeProvider>
                <Dialog open={this.state.openDialog} onRequestClose={this.handleCloseDialog}>
                    <div className='popup'>
                        Bạn đã gửi đơn phản hồi thành công.
                    </div>
                </Dialog>
                </MuiThemeProvider>
            </div>
        )
    }
}
function mapStateToProps(state){
    const selector = formValueSelector('createFeedbackRequest')
    return {
      title: selector(state, 'title'),
      content: selector(state, 'content'),
    }
    
  }
  
  const afterSubmit = (result, dispatch) =>{
    dispatch(reset('createFeedbackRequest'));
  }
  Feedback = reduxForm({
    form:'createFeedbackRequest',
    fields:['title','content'],
    validate,
    onSubmitSuccess: afterSubmit,
  })(Feedback)
  
  Feedback = connect(mapStateToProps)(Feedback)
  export default Feedback;  
