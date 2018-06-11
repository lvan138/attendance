import React, {Component} from 'react';
import { Container,Row, Table, Button, Card, CardHeader, CardBody, Pagination,PaginationItem,PaginationLink,
  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom';
import AddPositions from '../AddPositions/AddPositons';
import EditPositions from '../EditPositons/EditPositons';
import { connect } from 'react-redux';
import { getUserGroup, deleteUserGroup } from '../../../redux/actions/userGroups';
import { getWageGroup } from '../../../redux/actions/WageGroup';

class DeleteUserGroup extends React.Component {
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
    const { id, dispatchDeleteUserGroup } = this.props;
    return (
      <div>
        {/* <Button onClick={this.toggle}>{this.props.buttonLabel}<i className="fa fa-trash-o"></i></Button> */}
        <i className="fa fa-trash-o" onClick={this.toggle}></i>
        {/* <Button onClick={this.toggle}><i className="fa fa-trash-o"></i></Button> */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Xóa nhóm nhân viên</ModalHeader>
          <ModalBody>
            Bạn chắc chắn muốn xóa nhóm nhân viên này?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={() => {dispatchDeleteUserGroup(id)}}>Delete</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

class Positions extends Component {
  componentDidMount() {
    this.props.dispatch(getUserGroup());
    this.props.dispatch(getWageGroup());
  }

  render() {
    const  { userGroups } = this.props;
    return (
      <div>
        <h5 className="text-blayn"> Nhóm nhân viên</h5>
        <hr/>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>id</th>
              <th>Tên nhóm nhân viên</th>
              <th>Nhóm mức lương</th>
              <th>Sửa</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {userGroups.map(userGroup => (
              <tr>
                <td>{userGroup.id}</td>
                <td>{userGroup.name}</td>
                <td>{userGroup.wage_group ? userGroup.wage_group : ''}</td>
                <td><div className="button-edit"><EditPositions userGroup={userGroup}><i className="fa fa-edit"></i></EditPositions></div></td>
                <td><div className="button-edit"><DeleteUserGroup id={userGroup.id}><i className="fa fa-trash-o"></i></DeleteUserGroup></div></td>
              </tr>
            ))}
            
          </tbody>
        </Table>
        <br/>
        <AddPositions/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    userGroups: state.userGroups
})

const mapDispatchToProps = dispatch => ({
  dispatchDeleteUserGroup: id => {
      dispatch(deleteUserGroup(id))
  }
})
DeleteUserGroup = connect(mapStateToProps,mapDispatchToProps)(DeleteUserGroup)
Positions = connect(mapStateToProps)(Positions)
export default Positions