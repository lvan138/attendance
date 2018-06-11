import React, {Component} from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Collapse, Button, Fade,
  ListGroup,ListGroupItem,
  Form, FormGroup, Input
} from 'reactstrap';
import {connect} from 'react-redux'
import { Field, reduxForm, formValueSelector, reset} from 'redux-form'

import {postComment} from '../../redux/actions/notification'
import {getComment} from '../../redux/actions/notification'

const renderField = ({ input, placeholder, type, className,min,max,rows, meta: { touched, error, warning } }) => (
  <div>
        <Input {...input} placeholder={placeholder} className={className} type={type} rows={rows}/>
        
  </div>
)

class PostComment extends Component {
  
  handleFormSubmit({content}){
    let notification_id=this.props.notification_id;
    let commentRequest = {notification_id, content};
    this.props.dispatch(postComment(commentRequest)) ;
    this.props.dispatch(getComment());
   }
  

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
    this.handleFormSubmit= this.handleFormSubmit.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render(){
    const {user,handleSubmit,content, commentRequest,reset}=this.props;
   console.log(content)
    return(
      <div>
            <ListGroupItem>
              <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1"><img src={user.avatar}  className="rounded-0" alt="admin"/> <strong>{user.name}</strong></h5>
                
              </div>
              <div className="mb-1">
              <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >
                <FormGroup>
                    <Row>
                      <Col md="12">
                      <Field type="textarea" name="content" id="content" rows="2"
                                placeholder="" component={renderField}/>                
                      </Col>
                      </Row>  
                      <Row>
                      <Col md="1">
                        <Button type="submit" color="primary">Gửi</Button>
                      </Col>
                    </Row>    
                </FormGroup>
                </Form>
              </div>                  
            </ListGroupItem>    
      </div>
    );
  }
}
function mapStateToProps(state){
  const selector = formValueSelector('postComment')
  return{
  user: state.client.user,
  content: selector(state, 'content')
  }
}
const afterSubmit = (result, dispatch) =>{
  dispatch(reset('postComment'));
}

PostComment = reduxForm({
  form:'postComment',
  fields:['content'],
  onSubmitSuccess: afterSubmit,
})(PostComment)

export default connect(mapStateToProps)( PostComment);
