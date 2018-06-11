import React, {Component} from 'react';
import {
Nav, NavItem, NavLink, TabContent, TabPane, Form, Row, Col, FormGroup, Label, Input, Button
} from 'reactstrap';
import classnames from 'classnames';

export default class draft extends Component {
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
            <div className="text-blayn"><strong>Tạo ca mẫu</strong></div>   
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="border-bottom-0 border-left-0 border-right-0">
          <TabPane tabId="1">
            <h5 className="text-blayn">Tạo ca mẫu</h5>
            <div>Chọn ca có thể làm để quản lý căn cứ xếp lịch làm việc</div>       
            <Form className=" col-xs-12 col-sm-12 col-md-6  bg-light">
              <br/>
                <FormGroup row>
                    <Col md="2">
                      <Label className="text-blayn">Chủ nhật</Label>
                    </Col>
                    <Col md="10">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox1">Ca 1 (7:00-12:00)</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox2"> Ca 2 (12:00-17:00)</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox3">Ca 3 (17:00-22:00)</Label>
                      </FormGroup>
                    </Col>
                </FormGroup>
               <div className="line"></div>
                <FormGroup row>
                    <Col md="2">
                      <Label className="text-blayn">Thứ 2</Label>
                    </Col>
                    <Col md="10">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox1">Ca 1 (7:00-12:00)</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox2"> Ca 2 (12:00-17:00)</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox3">Ca 3 (17:00-22:00)</Label>
                      </FormGroup>
                    </Col>
                </FormGroup>
                <div className="line"></div>
                <FormGroup row>
                    <Col md="2">
                      <Label className="text-blayn">Thứ 3</Label>
                    </Col>
                    <Col md="10">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox1">Ca 1 (7:00-12:00)</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox2"> Ca 2 (12:00-17:00)</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox3">Ca 3 (17:00-22:00)</Label>
                      </FormGroup>
                    </Col>
                </FormGroup>
                <div className="line"></div>
                <FormGroup row>
                    <Col md="2">
                      <Label className="text-blayn">Thứ 4</Label>
                    </Col>
                    <Col md="10">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox1">Ca 1 (7:00-12:00)</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox2"> Ca 2 (12:00-17:00)</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox3">Ca 3 (17:00-22:00)</Label>
                      </FormGroup>
                    </Col>
                </FormGroup>
                <div className="line"></div>
                <FormGroup row>
                    <Col md="2">
                      <Label className="text-blayn">Thứ 5</Label>
                    </Col>
                    <Col md="10">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox1">Ca 1 (7:00-12:00)</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox2"> Ca 2 (12:00-17:00)</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox3">Ca 3 (17:00-22:00)</Label>
                      </FormGroup>
                    </Col>
                </FormGroup>
                <div className="line"></div>
                <FormGroup row>
                    <Col md="2">
                      <Label className="text-blayn">Thứ 6</Label>
                    </Col>
                    <Col md="10">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox1">Ca 1 (7:00-12:00)</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox2"> Ca 2 (12:00-17:00)</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox3">Ca 3 (17:00-22:00)</Label>
                      </FormGroup>
                    </Col>
                </FormGroup>
                <div className="line"></div>
                <FormGroup row>
                    <Col md="2">
                      <Label className="text-blayn">Thứ 7</Label>
                    </Col>
                    
                    <Col md="10">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox1">Ca 1 (7:00-12:00)</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox2"> Ca 2 (12:00-17:00)</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox3">Ca 3 (17:00-22:00)</Label>
                      </FormGroup>
                    </Col>
                </FormGroup>
                <div className="form-actions">
                    <Row>
                    <Col xs="12">
                    <Button type="submit" color="primary">Tạo</Button>
                     <Button color="secondary">Cancel</Button>
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