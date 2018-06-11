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
import PostComment from './PostComment'
import {connect} from 'react-redux'

import {getComment} from '../../redux/actions/notification'

class Comment extends Component {
  

  
  componentDidMount(){
    this.props.dispatch(getComment());
  }
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
   
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render(){
    const {comment,user}=this.props;
    let comments = comment.filter(x => x.notification_id == this.props.id )
  
    return(
      <div>
        <Button color="link" onClick={this.toggle} >Bình luận</Button>
        <Collapse isOpen={this.state.collapse} style={{paddingLeft:'15px'}}>
          <ListGroup>
          {comments.map(item => (
            <ListGroupItem>
              <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1"><img src={item.send_avatar}  className="rounded-0" alt={item.send_name}/> <strong>{item.send_name}</strong></h5>
                  <small className="text-muted">{item.created_at}</small>
              </div>
              <p className="mb-1">{item.content}
              </p>
            </ListGroupItem>
          ))}
            <PostComment notification_id={this.props.id}/>
          </ListGroup>
        </Collapse>
      </div>
    );
  }
}
function mapStateToProps(state){
  
  return{
  comment: state.comment,
  user: state.client.user,
 
  }
}

export default connect(mapStateToProps)( Comment);
