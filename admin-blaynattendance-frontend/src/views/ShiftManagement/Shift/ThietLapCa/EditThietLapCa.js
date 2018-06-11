import React, {Component} from 'react';
import {Card, CardBody, CardHeader,CardFooter, Form, FormGroup,  Label, Input, FormText,Col, Row,
  Modal, ModalHeader,ModalBody,ModalFooter, Button}from 'reactstrap';
import { connect } from 'react-redux'
import shiftMasters from '../../../../redux/reducers/shiftMasters';
import { updateShiftMaster } from '../../../../redux/actions/shiftMasters';

class EditThietLapCa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.handleChangePattern = this.handleChangePattern.bind(this)
    this.handleChangeStart = this.handleChangeStart.bind(this)
    this.handleChangeEnd = this.handleChangeEnd.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChangePattern(e) {
    this.props.shiftMaster.shift_pattern_id = e.target.value;
  }

  handleChangeStart(e) {
    this.props.shiftMaster.start_date = e.target.value;
  }

  handleChangeEnd(e) {
    this.props.shiftMaster.end_date = e.target.value;
  }
  render() {
    const { dispatchUpdateShiftMaster, shiftMaster, shiftPatterns } = this.props
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
                <Col xs="12" sm="6">
                    <Input type="select" name="select" id="exampleSelect" onChange={this.handleChangePattern} required>
                      {shiftPatterns.map(
                        shiftPattern => (
                          shiftPattern.id == shiftMaster.shift_pattern_id ?
                          <option value={shiftPattern.id} selected>{shiftPattern.name}</option>
                          : 
                          <option value={shiftPattern.id} >{shiftPattern.name}</option>
                        )
                      )}
                    </Input>
                </Col>
                </Row>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="name">Ngày bắt đầu</Label> <span className="required">*</span>
                    <Row>
                    <Col xs="12" sm="6">
                    <Input type="date" name="time" id="ngayBatDau" placeholder="time placeholder" onChange={this.handleChangeStart} defaultValue={shiftMaster.start_date}/>
                    </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="name">Ngày kết thúc</Label> <span className="required">*</span>
                    <Row>
                    <Col xs="12" sm="6">
                    <Input type="date" name="time" id="ngayKetThuc" placeholder="time placeholder" onChange={this.handleChangeEnd} defaultValue={shiftMaster.end_date}/>
                    </Col>
                    </Row>
                </FormGroup>          
                </Col>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={() => {dispatchUpdateShiftMaster(shiftMaster); this.setState({modal: !this.state.modal})}}>Change</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shiftPatterns: state.shiftPatterns
})

const mapDispatchToProps = dispatch => ({
  dispatchUpdateShiftMaster: shiftMaster => {
    dispatch(updateShiftMaster(shiftMaster))
  }
})

EditThietLapCa = connect(mapStateToProps, mapDispatchToProps)(EditThietLapCa)
export default EditThietLapCa