import React, {Component} from 'react';
import {Card, CardBody, CardHeader,CardFooter, Form, FormGroup,  Label, Input, FormText,Col, Row, Button}from 'reactstrap';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector  } from 'redux-form';
import { createUserGroup } from '../../../redux/actions/userGroups';

const renderInput = ({ input, placeholder, type, className }) => (
  <div>
      <Input {...input} placeholder={placeholder} className={className} type={type}/>
  </div>
)

const renderSelect = ({ input, placeholder, type, className, render }) => (
  <div>
      <Input {...input} placeholder={placeholder} className={className} type={type}>
        {render}
      </Input>
  </div>
)

class AddPositions extends Component {
  handleFormSubmit({name, wage_group_id}) {
    if (!wage_group_id) wage_group_id=this.props.wageGroups[0].id
    let userGroup = {name, wage_group_id};
    this.props.dispatch(createUserGroup(userGroup));
  }
  render() {
    const { handleSubmit, wageGroups } = this.props;
    return (
      <div className="bg-light">
          <br/>
          <h5 className="text-blayn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thêm nhóm nhân viên</h5>
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="add-position">
            <Row>
              <Col xs="12">
                <FormGroup>
                  <Label htmlFor="name">Tên nhóm nhân viên</Label> <span className="required">*</span>
                  <Row>
                  <Col xs="12" sm="6">
                  <Field type="text" name='name' id="name" placeholder="Nhập tên nhóm nhân viên" component={renderInput} required/>
                  </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="name">Mức lương (VNĐ/1h)</Label> <span className="required">*</span>
                  <Row>
                  <Col xs="12" sm="6">
                  <Field type="select" name="wage_group_id" id="muc-luong" component={renderSelect}
                    render={
                      wageGroups.map(wageGroup => (
                        <option value={wageGroup.id}>{wageGroup.name}</option>
                      ))
                    }>
                  </Field>
                  </Col>
                  </Row>
                </FormGroup>
                {/* <FormGroup>
                  <Label htmlFor="name">Mức lương</Label> <span className="required">*</span>
                  <Row>
                  <Col xs="12" sm="6">
                  <Input type="text" id="muc-luong" placeholder="VNĐ/1h" required/>
                  </Col>
                  </Row>
                </FormGroup> */}
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
  const selector = formValueSelector('addUserGroup')
  return {
    wageGroups: state.wageGroups,
    name: selector(state, 'name'),
    wage_group_id: selector(state, 'wage_group_id'),
  }
}

AddPositions = reduxForm({
  form: 'addUserGroup',
  fields: ['name', 'wage_group_id'] 
})(AddPositions);

AddPositions = connect(mapStateToProps)(AddPositions);

export default AddPositions