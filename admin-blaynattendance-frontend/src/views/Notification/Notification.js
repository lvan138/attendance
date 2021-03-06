import React, {Component} from 'react';
import {
Nav, NavItem, NavLink, TabContent, TabPane, Form, Row, Col, FormGroup, Label, Input, Button,
} from 'reactstrap';
import classnames from 'classnames';
import CreateNotification from './CreateNotification';
import ListNotification from './ListNotification';

export default class Wage extends Component {
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
  render() {
    return (
      <div>
        <Nav tabs className="bg-light">
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}onClick={() => { this.toggle('1'); }}>
            <div className="text-blayn"><strong>Thông báo</strong></div>   
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="border-bottom-0">
          <TabPane tabId="1">
            <Row>
              <Col xs="12" sm="3" md="3">
                <CreateNotification/>
              </Col>
              <Col xs="12" sm="9" md="9">
                <ListNotification/>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    )
  }
}