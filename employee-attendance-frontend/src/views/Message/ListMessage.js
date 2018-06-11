import React, {Component} from 'react'
import { Form, FormGroup, Input, Button,Row, Col, Label, ListGroup, ListGroupItem} from 'reactstrap'

class ListNotification extends Component {
    render(){
        return (
            <ListGroup>
                <ListGroupItem className="bg-info text-center">Nhắn tin</ListGroupItem>
                <ListGroupItem>
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1"><img src={'img/avatars/6.jpg'}  class="rounded-0" alt="admin"/> <strong>Admin</strong></h5>
                        <small class="text-muted">27/3/2018</small>
                    </div>
                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus.
                     Maecenas sed diam eget risus varius blandit.
                    </p>
                   
                </ListGroupItem>
                 
          </ListGroup>
        )
    }
}

export default ListNotification;