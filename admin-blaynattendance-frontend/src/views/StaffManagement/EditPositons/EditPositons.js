import React, {Component} from 'react';
import {Card, CardBody, CardHeader,CardFooter, Form, FormGroup,  Label, Input, FormText,Col, Row, Button,
Modal, ModalBody,ModalHeader,ModalFooter}from 'reactstrap';
import { updateUserGroup } from '../../../redux/actions/userGroups';
import { connect } from 'react-redux';

class EditPositions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeWage = this.handleChangeWage.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChangeName(e) {
    this.props.userGroup.name = e.target.value;
  }

  handleChangeWage(e) {
    this.props.userGroup.wage_group_id = e.target.value;
  }
  render() {
    const { userGroup, wageGroups, dispatchUpdateUserGroup } = this.props;
    return (
      <div>
        <i className="fa fa-edit" onClick={this.toggle}></i>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Chỉnh sửa nhóm nhân viên</ModalHeader>
          <ModalBody>
          <Form>
            <Row>
              <Col xs="12">
                <FormGroup>
                  <Label htmlFor="name">Tên nhóm nhân viên</Label> <span className="required">*</span>
                  <Row>
                  <Col xs="12" sm="12">
                  <Input type="text" id="name" placeholder="Nhập tên nhóm nhân viên" defaultValue={userGroup.name} onChange={this.handleChangeName} required/>
                  </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="name">Mức lương (VNĐ/1h)</Label> <span className="required">*</span>
                  <Row>
                  <Col xs="12" sm="6">
                  <Input type="select" name="select" id="muc-luong" onChange={this.handleChangeWage}>
                    {wageGroups.map(
                      wageGroup => (
                        wageGroup.id == userGroup.wage_group_id ?
                         <option value={wageGroup.id} selected>{wageGroup.name}</option>
                         : 
                         <option value={wageGroup.id} >{wageGroup.name}</option>
                      )
                    )}
                  </Input>
                  </Col>
                  </Row>
                </FormGroup>
              </Col>
            </Row>
          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={() => {dispatchUpdateUserGroup(userGroup); this.setState({modal: !this.state.modal})}}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wageGroups: state.wageGroups
})

const mapDispatchToProps = dispatch => ({
  dispatchUpdateUserGroup: userGroup => {
    dispatch(updateUserGroup(userGroup))
  }
})
EditPositions = connect(mapStateToProps, mapDispatchToProps)(EditPositions)
export default EditPositions
