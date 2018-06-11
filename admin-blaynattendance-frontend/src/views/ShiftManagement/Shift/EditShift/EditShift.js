import React, {Component} from 'react';
import {Card, CardBody, CardHeader,CardFooter, Form, FormGroup,  Label, Input, FormText,Col, Row,
  Modal, ModalHeader,ModalBody,ModalFooter, Button}from 'reactstrap';
import { updateShiftPattern } from '../../../../redux/actions/shiftPatterns';
import { connect } from 'react-redux';

class EditShift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeStartTime = this.handleChangeStartTime.bind(this);
    this.handleChangeEndTime = this.handleChangeEndTime.bind(this);
    this.handleChangeFactorSalary = this.handleChangeFactorSalary.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChangeName(e) {
    this.props.shiftPattern.name = e.target.value;
  }

  handleChangeStartTime(e) {
    this.props.shiftPattern.start_time = e.target.value;
  }

  handleChangeEndTime(e) {
    this.props.shiftPattern.end_time = e.target.value;
  }

  handleChangeFactorSalary(e) {
    this.props.shiftPattern.factor_salary = e.target.value;
  }
  render() {
    const { shiftPattern, dispatchUpdateShiftPattern } = this.props
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
                    <Label htmlFor="name">Tên ca làm việc</Label> <span className="required">*</span>
                    <Row>
                    <Col xs="12" sm="12">
                    <Input type="text" id="name" placeholder="Tên ca làm việc" defaultValue={shiftPattern.name} onChange={this.handleChangeName} required/>
                    </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="name">Giờ bắt đầu</Label> <span className="required">*</span>
                    <Row>
                    <Col xs="12" sm="12">
                    <Input type="time" name="date" id="giờ-bat-dau" placeholder="time placeholder" onChange={this.handleChangeStartTime} defaultValue={shiftPattern.start_time} />
                    </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                      <Label htmlFor="name">Giờ kết thúc</Label> <span className="required">*</span>
                      <Row>
                      <Col xs="12" sm="12">
                      <Input type="time" name="date" id="giờ-ket-thuc" placeholder="time placeholder" onChange={this.handleChangeEndTime} defaultValue={shiftPattern.end_time}/>
                      </Col>
                      </Row>
                  </FormGroup>
                  <FormGroup>
                      <Label htmlFor="name">Hệ số lương</Label> <span className="required">*</span>
                      <Row>
                      <Col xs="12" sm="12">
                      <Input type="number" id="he-so-luong" step="0.1" name="end-time" onChange={this.handleChangeFactorSalary} placeholder="Hệ số lương, ví dụ: 1.0" defaultValue={shiftPattern.factor_salary}/>
                      </Col>
                      </Row>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={() => {dispatchUpdateShiftPattern(shiftPattern); this.setState({modal: !this.state.modal})}}>Change</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = dispatch => ({
  dispatchUpdateShiftPattern: shiftPattern => {
    dispatch(updateShiftPattern(shiftPattern))
  }
})

EditShift = connect(mapStateToProps,mapDispatchToProps)(EditShift)
export default EditShift