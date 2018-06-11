import React, {Component} from 'react';
import {Card, CardBody, CardHeader,CardFooter, Form, FormGroup,  Label, Input, FormText,Col, Row, Button}from 'reactstrap';
import { Field, reduxForm, formValueSelector  } from 'redux-form';
import { connect } from 'react-redux';
import { createWageGroup, getWageStory } from '../../redux/actions/WageGroup';
import wageGroups from '../../redux/reducers/wageGroups';

const renderField = ({ input, placeholder, type, className }) => (
  <div>
      <Input {...input} placeholder={placeholder} className={className} type={type}/>
  </div>
)

class AddWageGroup extends Component {
  handleFormSubmit({name, salary, start_date})  {
    let wageGroup = {name, salary, start_date};
    this.props.dispatch(createWageGroup(wageGroup));
    this.props.dispatch(getWageStory());
  }
  render() {
    const { handleSubmit, name } = this.props;
    console.log(name);
    return (
      <div className="bg-light">
          <br/>
          <h5 className="text-blayn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thêm nhóm mức lương</h5>
          <form className="add-position" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Row>
              <Col xs="12">
                <FormGroup>
                  <Label htmlFor="name">Tên nhóm mức lương</Label> <span className="required">*</span>
                  <Row>
                    <Col xs="12" sm="6">
                    <Field type="text" id="name" name="name" placeholder="Nhập tên nhóm mức lương" component={renderField} required/>
                    </Col>
                  </Row>
                  <Row>
                        <Col xs="12">
                        <FormGroup>
                            <Label htmlFor="name">Mức lương (VNĐ/1h)</Label> <span className="required">*</span>
                            <Row>
                            <Col xs="12" sm="6">
                            <Field type="text" id="salary" name="salary" placeholder="Nhập mức lương" component={renderField} required/>
                            </Col>
                            </Row>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                        <FormGroup>
                            <Label htmlFor="name">Ngày bắt đầu</Label> <span className="required">*</span>
                            <Row>
                            <Col xs="12" sm="6">
                            <Field type="date" id="start-date" name="start_date" placeholder="Nhập ngày bắt đâu mức lương" component={renderField} required/>
                            </Col>
                            </Row>
                            </FormGroup>
                        </Col>
                    </Row>
                </FormGroup>
              </Col>
            </Row>
            <Button type="submit"  color="primary">Add</Button>
            <Button color="secondary">Cancel</Button>
          </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const   selector = formValueSelector('addWageGroup')
  return {
    name: selector(state, 'name'),
    salary: selector(state, 'salary'),
    start_date: selector(state, 'start_date'),
  }
}

AddWageGroup = reduxForm({
  form: 'addWageGroup',
  fields: ['name', 'salary', 'start_date'] 
})(AddWageGroup);

AddWageGroup = connect(mapStateToProps)(AddWageGroup);

export default AddWageGroup
