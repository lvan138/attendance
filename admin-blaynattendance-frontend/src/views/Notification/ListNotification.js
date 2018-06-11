import React, {Component} from 'react'
import { Form, FormGroup, Input, Button,Row, Col, Label, ListGroup, ListGroupItem} from 'reactstrap'
import Comment from './Comment'
import {connect} from 'react-redux'
import {getNotification} from '../../redux/actions/notification'

class ListNotification extends Component {

    componentDidMount(){
        // // setInterval(this.props.dispatch(getNotification()), 3000);
        // setInterval(() => dispatch(getNotification()), 1000);
        this.props.dispatch(getNotification());
      
    }
    render(){
        const {notification}=this.props;
        console.log(notification);
        return (
            <ListGroup>
                <ListGroupItem className="bg-info text-center"><h5>Danh sách thông báo</h5></ListGroupItem>
                {notification.map(item => (
                <ListGroupItem>
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1"><img src={item.sent_avatar}  className="rounded-0" alt="{item.sent_name}"/> <strong>{item.sent_name}</strong></h5>
                        <small className="text-muted">{item.created_at}</small>
                    </div>
                    <p className="mb-1">{item.content}
                    </p>
                    <Comment id={item.id}/>
                </ListGroupItem>
                )
                )}
          </ListGroup> 
        )
    }
}
const mapStateToProps = state =>({
    notification: state.notification
})


export default connect(mapStateToProps)( ListNotification);