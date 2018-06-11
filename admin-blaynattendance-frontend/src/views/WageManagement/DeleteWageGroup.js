import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { deleteWageGroup, getWageStory } from '../../redux/actions/WageGroup';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector  } from 'redux-form';

class DeleteWageGroup extends Component {
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
        const { id, handleSubmit,dispatchDeleteWageGroup } = this.props;
        return (
            <div>
            <i className="fa fa-trash-o" onClick={this.toggle}></i>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Xóa nhóm mức lương</ModalHeader>
                <ModalBody>
                Bạn chắc chắn muốn xóa nhóm mức lương này?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => {dispatchDeleteWageGroup(id)}}>Delete</Button>{' '}
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
    dispatchDeleteWageGroup: id => {
        dispatch(deleteWageGroup(id))
        dispatch(getWageStory())
    }
})

DeleteWageGroup = connect(mapStateToProps, mapDispatchToProps)(DeleteWageGroup);
export default DeleteWageGroup;