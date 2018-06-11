import React, {Component} from 'react';
import {Card, CardBody, CardHeader,CardFooter, Form, FormGroup,  Label, Input, FormText,Col, Row,
  Modal, ModalHeader,ModalBody,ModalFooter, Button}from 'reactstrap';

export default class SuaBangLuongCuaNhanVien extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <i className="fa fa-edit" onClick={this.toggle}></i>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Sửa ca</ModalHeader>
          <ModalBody>
            <Form className="add-position">
              <Row>
                <Col xs="12">
                   <FormGroup>
                    <Label htmlFor="name">Ngày</Label> <span className="required">*</span>
                    <Row>
                    <Col xs="12" sm="12">
                    <Input type="date" id="name" placeholder="Ngày" required readOnly/>
                    </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="name">Ca</Label> <span className="required">*</span>
                    <Row>
                    <Col xs="12" sm="12">
                    <Input type="text" id="name" placeholder="Ca 1" required readOnly/>
                    </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="name">Thời gian vào</Label> <span className="required">*</span>
                    <Row>
                    <Col xs="12" sm="12">
                    <Input type="time" name="date" id="time-start" placeholder="time placeholder" value="08:00" />
                    </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                      <Label htmlFor="name">Thời gian ra</Label> <span className="required">*</span>
                      <Row>
                      <Col xs="12" sm="12">
                      <Input type="time" name="date" id="time-end" placeholder="time placeholder" value="12:00"/>
                      </Col>
                      </Row>
                  </FormGroup>
                </Col>
              </Row>
              <Button type="submit"  color="primary">Add</Button>
              <Button color="secondary">Cancel</Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Change</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
