import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,
Form,FormGroup, Label, Input,
InputGroup, InputGroupAddon,
Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import classnames from 'classnames';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteUser } from '../../../redux/actions/users';

class DeleteEmployees extends React.Component {
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
      const { id, dispatchDeleteUser } = this.props;
      return (
        <div>
          {/* <Button onClick={this.toggle}>{this.props.buttonLabel}<i className="fa fa-trash-o"></i></Button> */}
          <i className="fa fa-trash-o" onClick={this.toggle}></i>
          {/* <Button onClick={this.toggle}><i className="fa fa-trash-o"></i></Button> */}
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Xóa nhân viên</ModalHeader>
            <ModalBody>
              Bạn chắc chắn muốn xóa nhân viên này?
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={()=>{dispatchDeleteUser(id)}}>Delete</Button>{' '}
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
  dispatchDeleteUser: id => {
    dispatch(deleteUser(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteEmployees)