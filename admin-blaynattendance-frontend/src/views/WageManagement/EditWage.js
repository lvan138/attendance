import React, {Component} from 'react';
import {Card, CardBody, CardHeader,CardFooter, Form, FormGroup,  Label, Input, FormText,Col, Row, Button,
Modal, ModalBody,ModalHeader,ModalFooter}from 'reactstrap';

export default class EditWage extends Component {
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
          <ModalHeader toggle={this.toggle}>Chỉnh sửa mức lương</ModalHeader>
          <ModalBody>
          <Form>
          <Row>
                        <Col xs="12">
                            <FormGroup>
                                <Label htmlFor="name">Tên nhóm mức lương</Label> <span className="required">*</span>
                                <Row>
                                    <Col xs="12" sm="6">
                                        <Input type="select" name="select" id="select">
                                            <option value="1">Nhóm 1</option>
                                            <option value="2">Nhóm 2</option>
                                            <option value="3">Nhóm 3</option>
                                        </Input>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                        <FormGroup>
                            <Label htmlFor="name">Mức lương (VNĐ/1h)</Label> <span className="required">*</span>
                            <Row>
                            <Col xs="12" sm="6">
                            <Input type="text" id="salary" placeholder="Nhập mức lương" required/>
                            </Col>
                            </Row>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                        <FormGroup>
                            <Label htmlFor="name">Ngày bắt đầu</Label> <span className="required">*</span>
                            <Row>
                            <Col xs="12" sm="6">
                            <Input type="date" id="start-date" placeholder="Nhập ngày bắt đâu mức lương" required/>
                            </Col>
                            </Row>
                            </FormGroup>
                        </Col>
                    </Row> 
          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
