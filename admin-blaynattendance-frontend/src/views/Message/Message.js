import React from 'react'

import {Col,Row,Breadcrumb,BreadcrumbItem,  TabContent, TabPane, 
Nav, NavItem, NavLink,Table, Card, CardBody,CardHeader,
Form, FormGroup, Label, Input, Button, ListGroup,
ListGroupItem
 }from 'reactstrap'
import {Link} from 'react-router-dom'
import classnames from 'classnames'

class Message extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

    render(){
      return(
        <div>
        <Nav tabs className="bg-light">
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}onClick={() => { this.toggle('1'); }}>
            <div className="text-blayn"><strong>Tin nhắn</strong></div>   
            </NavLink>
          </NavItem>
         
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="border-bottom-0 border-left-0 border-right-0">
          <TabPane tabId="1">
          <ListGroup>
            <ListGroupItem className="text-right">Tin nhắn mới</ListGroupItem>
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
          </TabPane>
        </TabContent>
      </div>
        )
    }
}

export default Message