import React, {Component} from 'react'
import { Form, FormGroup, Input, Button,Row, Col, Label} from 'reactstrap'
import {connect} from 'react-redux'
import { Field, reduxForm, formValueSelector, reset} from 'redux-form'

import {postNotification} from '../../redux/actions/notification'
import {getNotification} from '../../redux/actions/notification'

const renderField = ({ input, placeholder, type, className,min,max,rows, meta: { touched, error, warning } }) => (
  <div>
        <Input {...input} placeholder={placeholder} className={className} type={type} rows={rows}/>
        
  </div>
)


class CreateNotification extends Component {
    handleFormSubmit({content}){
        let notificationRequest = {content};
        this.props.dispatch(postNotification(notificationRequest)) ;
        this.props.dispatch(getNotification());
    }
    constructor(props) {
        super(props);
        this.handleFormSubmit= this.handleFormSubmit.bind(this);
      }
      
    render(){
        const {user,handleSubmit,content, notificationRequest,reset}=this.props;
        console.log(content)
        return (
            <div class="border">
                <br/>
                <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <FormGroup >
                    <Col md="12">
                      <div className="avatar-comment ">
                        <img src={user.avatar}  class="rounded-0" alt={user.name}/> <strong>{user.name}</strong>
                      </div>
                    </Col>
                    <Col md="12">
                    <Field type="textarea" name="content" id="content" rows="9"
                                placeholder="Tạo thông báo" component={renderField}/>   
                    </Col>
                    <br/>
                    <Col className="text-right">
                        <Button type="submit" color="primary">Gửi</Button>
                    </Col>
                </FormGroup>
                </Form>
            </div>
        )
    }
}
function mapStateToProps(state){
    const selector = formValueSelector('postNotification')
    return{
    user: state.client.user,
    content: selector(state, 'content')
    }
  }
  const afterSubmit = (result, dispatch) =>{
    dispatch(reset('postNotification'));
  }
  
  CreateNotification = reduxForm({
    form:'postNotification',
    fields:['content'],
    onSubmitSuccess: afterSubmit,
  })( CreateNotification)
  
  export default connect(mapStateToProps)(  CreateNotification);
