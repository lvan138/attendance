import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class DeleteWage extends Component {
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

    render(){
        return (
            <div>
            <i className="fa fa-trash-o" onClick={this.toggle}></i>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Xóa mức lương</ModalHeader>
                <ModalBody>
                Bạn chắc chắn muốn xóa mức lương này?
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
export default DeleteWage;