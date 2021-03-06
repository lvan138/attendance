import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,
Form,FormGroup, Label, Input  } from 'reactstrap';
import classnames from 'classnames';
import {Link} from 'react-router-dom';

export default class PheDuyetDXNV extends Component {
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
            <div className="text-blayn"><strong>Đơn xin nghỉ việc</strong></div>   
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="border-bottom-0 border-left-0 border-right-0">
          <TabPane tabId="1">
           
            <div className="text-blayn text-right"><Link to="/application"><i className="fa fa-arrow-left">Thống kê đơn</i></Link></div>
            <hr/>
            <h5 className="text-blayn">Phê duyệt đơn xin nghỉ việc</h5>
            <Form className=" col-xs-12 col-sm-12 col-md-6  bg-light">
            <br/>
              <Row>
                <Col xs="12">
                <FormGroup>
                    <Label htmlFor="name" className="text-blayn">Họ và tên</Label>
                    <Row>
                    <Col xs="12" sm="12">
                    <Input type="text" id="kind" value="Nguyễn Văn A" readOnly/>
                    </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="name" className="text-blayn">Ngày bắt đầu xin nghỉ việc</Label>
                    <Row>
                    <Col xs="12" sm="12">
                    <Input type="date" id="date" value="12/08/1996" readOnly/>
                    </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="name" className="text-blayn">Lý do</Label>
                    <Row>
                    <Col xs="12" sm="12">
                    <Input type="textarea" name="resion" id="comment" rows="3"
                             value="Lý do" readOnly/>
                    </Col>
                    </Row>
                </FormGroup>
                </Col>
              </Row>
              <div className="form-actions">
              <Row>
                <Col xs="12">
                  <Button type="submit" color="primary">Chấp nhận</Button>
                  <Button type="submit" color="danger">Không chấp nhận</Button>
                </Col>
              </Row>
              </div>
              <br/>
            </Form>
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

