import React, {Component} from 'react'
import {
    Modal, ModalHeader,ModalBody,ModalFooter, Button
} from 'reactstrap'
import { connect } from 'react-redux'
import { deleteShiftPattern } from '../../../../redux/actions/shiftPatterns';

class DeleteShift extends React.Component {
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
      const { id, dispatchDeleteShiftPattern } = this.props
      return (
        <div>
          <i className="fa fa-trash-o" onClick={this.toggle}></i>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Xóa ca</ModalHeader>
            <ModalBody>
              Bạn chắc chắn muốn xóa ca này?
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={() => {dispatchDeleteShiftPattern(id)}}>Delete</Button>{' '}
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
  dispatchDeleteShiftPattern: id => {
    dispatch(deleteShiftPattern(id))
  }
})
DeleteShift = connect(mapStateToProps, mapDispatchToProps)(DeleteShift)
export default DeleteShift;
  