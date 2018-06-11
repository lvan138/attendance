import React, {Component} from 'react'
import {Col, Row, Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector  } from 'redux-form';
import { createShiftMaster } from '../../../../redux/actions/shiftMasters';

const renderInput = ({ input, placeholder, type, className }) => (
    <Input {...input} placeholder={placeholder} className={className} type={type}/>
)
  
const renderSelect = ({ input, placeholder, type, className, render }) => (
    <Input {...input} placeholder={placeholder} className={className} type={type}>
        {render}
    </Input>
)
class ThietLapCa extends Component{
    handleFormSubmit({start_date, shift_pattern_id, end_date}) {
        if(!shift_pattern_id) shift_pattern_id = this.props.shiftPatterns[0].id
        let shiftMaster = {start_date, shift_pattern_id, end_date};
        this.props.dispatch(createShiftMaster(shiftMaster));
    }
    render(){
        const { shiftPatterns, handleSubmit } = this.props
        return(
            <div className="bg-light">
                <br/>
                <h5 className="text-blayn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lên ca làm việc cho cửa hàng</h5>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="add-position">
                    <Row>
                        <Col xs="12">
                        <FormGroup>
                            <Label htmlFor="name">Tên ca làm việc</Label> <span className="required">*</span>
                            <Row>
                            <Col xs="12" sm="6">
                                <Field type="select" name="shift_pattern_id" id="shift_pattern" required component={renderSelect} 
                                render=
                                    {shiftPatterns.map(shiftPattern => (
                                        <option value={shiftPattern.id}>{shiftPattern.name}</option>
                                    ))}>
                                </Field>
                            </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="name">Ngày bắt đầu</Label> <span className="required">*</span>
                            <Row>
                            <Col xs="12" sm="6">
                            <Field type="date" name="start_date" id="start_date" placeholder="time placeholder" component={renderInput}/>
                            </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="name">Ngày kết thúc</Label> <span className="required">*</span>
                            <Row>
                            <Col xs="12" sm="6">
                            <Field type="date" name="end_date" id="end_date" placeholder="time placeholder" component={renderInput}/>
                            </Col>
                            </Row>
                        </FormGroup>                        
                        </Col>
                    </Row>
                    <Button type="submit"  color="primary">Create</Button>
                    <Button color="secondary">Cancel</Button>
                </form>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const selector = formValueSelector('addUserGroup')
    return {
      shiftPatterns: state.shiftPatterns,
      shift_pattern_id: selector(state, 'shift_pattern_id'),
      start_date: selector(state, 'start_date'),
      end_date: selector(state, 'end_date')
    }
}

ThietLapCa = reduxForm({
    form: 'thietLapCa',
    fields: ['shift_pattern_id', 'start_date', 'end_date'] 
})(ThietLapCa);
ThietLapCa = connect(mapStateToProps)(ThietLapCa)
export default ThietLapCa