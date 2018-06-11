import React, {Component} from 'react'
import {
    Modal, ModalHeader,ModalBody,ModalFooter, Button
} from 'reactstrap'
class XoaBangLuongCuaNhanVien extends React.Component {
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
          <i className="fa fa-trash-o" onClick={this.toggle}></i>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Xóa ca</ModalHeader>
            <ModalBody>
              Bạn chắc chắn muốn công này?
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.toggle}>Delete</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
}
export default XoaBangLuongCuaNhanVien;
  