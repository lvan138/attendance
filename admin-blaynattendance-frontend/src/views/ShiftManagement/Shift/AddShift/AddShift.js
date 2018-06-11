import React, {Component} from 'react';
import {Form, FormGroup,  Label, Input, FormText,Col, Row, Button}from 'reactstrap';
import { connect } from 'react-redux'
import { createShiftPattern } from '../../../../redux/actions/shiftPatterns';
import { Field, reduxForm, formValueSelector  } from 'redux-form';

const renderInput = ({ input, placeholder, type, className }) => (
  <Input {...input} placeholder={placeholder} className={className} type={type}/>
)

class AddShift extends Component {
  handleFormSubmit({name, start_time, end_time, factor_salary}) {
    let shiftPattern = {name, start_time, end_time, factor_salary};
    this.props.dispatch(createShiftPattern(shiftPattern));
  }
  render() {
    const { handleSubmit } = this.props
    return (
      <div className="bg-light">
        <br/>
        <h5 className="text-blayn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thêm ca</h5>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="add-position">
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="name">Tên ca làm việc</Label> <span className="required">*</span>
                <Row>
                <Col xs="12" sm="6">
                <Field type="text" id="name" name='name' placeholder="Tên ca làm việc" component={renderInput} required/>
                </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Giờ bắt đầu</Label> <span className="required">*</span>
                <Row>
                <Col xs="12" sm="6">
                <Field type="time" name="start_time" id="giờ-bat-dau" placeholder="time placeholder" component={renderInput}/>
                </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                  <Label htmlFor="name">Giờ kết thúc</Label> <span className="required">*</span>
                  <Row>
                  <Col xs="12" sm="6">
                  <Field type="time" name="end_time" id="giờ-ket-thuc" placeholder="time placeholder" component={renderInput}/>
                  </Col>
                  </Row>
              </FormGroup>
              <FormGroup>
                  <Label htmlFor="name">Hệ số lương</Label> <span className="required">*</span>
                  <Row>
                  <Col xs="12" sm="6">
                  <Field type="number" id="he-so-luong" step="0.1" name="factor_salary" placeholder="Hệ số lương, ví dụ: 1.0" component={renderInput}/>
                  </Col>
                  </Row>
              </FormGroup>
            </Col>
          </Row>
          <Button type="submit" color="primary">Add</Button>
          <Button color="secondary">Cancel</Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const selector = formValueSelector('addUserGroup')
  return {
    name: selector(state, 'name'),
    start_time: selector(state, 'start_time'),
    end_time: selector(state, 'end_time'),
    factor_salary: selector(state, 'factor_salary')
  }
}
AddShift = reduxForm({
  form: 'addShiftPattern',
  fields: ['name', 'start_time', 'end_time', 'factor_salary'] 
})(AddShift);

AddShift = connect(mapStateToProps)(AddShift)
export default AddShift
