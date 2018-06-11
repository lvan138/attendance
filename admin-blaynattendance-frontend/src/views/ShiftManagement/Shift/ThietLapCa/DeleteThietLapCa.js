import React, {Component} from 'react'
import {
    Modal, ModalHeader,ModalBody,ModalFooter, Button
} from 'reactstrap'
import { connect } from 'react-redux'
import { deleteShiftMaster } from '../../../../redux/actions/shiftMasters';

class  DeleteThietLapCa extends React.Component {
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
      const { id, dispatchDeleteShiftMaster} = this.props
      return (
        <div>
          <i className="fa fa-trash-o" onClick={this.toggle}></i>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Xóa ca</ModalHeader>
            <ModalBody>
              Bạn chắc chắn muốn xóa ca này?
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={() => {dispatchDeleteShiftMaster(id)}}>Delete</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
}

const mapDispatchToProps = dispatch => ({
  dispatchDeleteShiftMaster: id => {
    dispatch(deleteShiftMaster(id))
  }
})

const mapStateToProps = state => ({
  state
})

DeleteThietLapCa = connect(mapStateToProps, mapDispatchToProps)(DeleteThietLapCa)
export default DeleteThietLapCa;
  