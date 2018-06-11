import React, {Component} from 'react';
import {Card, CardBody, CardHeader,CardFooter, Form, FormGroup,  Label, Input, FormText,Col, Row, Button,
Modal, ModalBody,ModalHeader,ModalFooter}from 'reactstrap';
import { connect } from 'react-redux';
import { updateWageGroup, getWageStory } from '../../redux/actions/WageGroup';

class EditWageGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSalary = this.handleChangeSalary.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChangeName(e) {
    this.props.wageGroup.name = e.target.value;
  }

  handleChangeSalary(e) {
    if (!this.props.wageGroup.wage) {
      this.props.wageGroup.wage = {
          salary: null,
          start_date: null
      }
    }
    this.props.wageGroup.wage.salary = e.target.value;
  }

  handleChangeStartDate(e) {
    if (!this.props.wageGroup.wage) {
      this.props.wageGroup.wage = {
          salary: null,
          start_date: null
      }
    }
    this.props.wageGroup.wage.start_date = e.target.value;
    console.log(this.props.wageGroup);
  }

  render() {
    const { wageGroup, dispatchUpdateWageGroup } = this.props;
    return (
      <div>
        <i className="fa fa-edit" onClick={this.toggle}></i>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Chỉnh sửa nhóm mức lương</ModalHeader>
          <ModalBody>
          <Form>
            <Row>
              <Col xs="12">
                <FormGroup>
                  <Label htmlFor="name">Tên nhóm mức lương</Label> <span className="required">*</span>
                  <Row>
                  <Col xs="12" sm="12">
                  <Input type="text" id="name" placeholder="Nhập tên nhóm mức lương" onChange={this.handleChangeName} defaultValue={wageGroup.name} required/>
                  </Col>
                  </Row>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <FormGroup>
                  <Label htmlFor="salary">Mức lương (VNĐ/1h)</Label> <span className="required">*</span>
                  <Row>
                  <Col xs="12" sm="12">
                  <Input type="text" id="salary" placeholder="Nhập mức lương" onChange={this.handleChangeSalary} defaultValue={wageGroup.wage ? wageGroup.wage.salary : ''} required/>
                  </Col>
                  </Row>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <FormGroup>
                  <Label htmlFor="start-date">Ngày bắt đầu</Label> <span className="required">*</span>
                  <Row>
                  <Col xs="12" sm="12">
                  <Input type="date" id="start-date" placeholder="Nhập ngày bắt đầu" onChange={this.handleChangeStartDate} defaultValue={wageGroup.wage ? wageGroup.wage.start_date : ''} required/>
                  </Col>
                  </Row>
                </FormGroup>
              </Col>
            </Row>
          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={() => {dispatchUpdateWageGroup(wageGroup); this.setState({modal: !this.state.modal})}}>Save</Button>{' '}
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
  dispatchUpdateWageGroup: (wageGroup) => {
      dispatch(updateWageGroup(wageGroup));
      dispatch(getWageStory())
  }
})

EditWageGroup = connect(mapStateToProps, mapDispatchToProps)(EditWageGroup);
export default EditWageGroup;