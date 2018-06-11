import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,
Form,FormGroup, Label, Input  } from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form'
import {formValueSelector} from 'redux-form'
import { getProfile, updateProfile } from '../../redux/actions/profile';

const renderField = ({ input, placeholder, type, className }) => (
  <div>
      <Input {...input} placeholder={placeholder} className={className} type={type}/>
  </div>
)

class Profile extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.formateDate = this.formateDate.bind(this);
    this.state = {
      activeTab: '1',
      currentUser: JSON.parse(localStorage.getItem('user'))
    };
  }

  componentDidMount() {
    this.props.dispatch(getProfile())
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  formateDate(inputDate)
  {
    var splitDate = inputDate.split('-');
    if(splitDate.count == 0){
        return null;
    }

    var year = splitDate[0];
    var month = splitDate[1];
    var day = splitDate[2]; 

    return day + '/' + month + '/' + year;
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <Nav tabs className="bg-light">
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}onClick={() => { this.toggle('1'); }}>
            <div className="text-blayn"><strong>Hồ sơ người dùng</strong></div>   
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="border-bottom-0">
          <TabPane tabId="1">
            <Form>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name" className="text-blayn">Họ và tên</Label>
                    <Row>
                    <Col xs="12" sm="5">
                    <Input className="form-control-readonly" type="text" id="name" placeholder='Họ và tên' defaultValue={user.name} readOnly />
                    </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="birth-day" className="text-blayn">Ngày sinh</Label>
                    <Row>
                    <Col xs="12" sm="5">
                    <Input className="form-control-readonly" type="text" id="birth-day"  placeholder='Ngày sinh' defaultValue={this.formateDate(user.date_of_birth)} readOnly />
                    </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="gernal" className="text-blayn">Giới tính</Label>
                    <Row>
                    <Col xs="12" sm="5">
                    <Input className="form-control-readonly" type="text" id="gernal" 
                        placeholder='Giới tính' defaultValue={user.gender == 1 ? "Nam" : "Nữ"} readOnly />
                    </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="address" className="text-blayn">Địa chỉ</Label> <span className="required">*</span>
                    <Row>
                    <Col xs="12" sm="5">
                    <Input className="form-control1" type="text" id="address" placeholder='Địa chỉ' onChange={(e) => {user.address = e.target.value}} defaultValue={user.address} required/>
                    </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="phone" className="text-blayn">Số điện thoại</Label> <span className="required">*</span>
                    <Row>
                    <Col xs="12" sm="5">
                    <Input className="form-control1" type="text" id="phone" placeholder='Số điện thoại' onChange={(e) => {user.phone_number = e.target.value}} defaultValue={user.phone_number} required/>
                    </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="email" className="text-blayn">Email</Label> <span className="required">*</span>
                    <Row>
                    <Col xs="12" sm="5">
                    <Input className="form-control1" type="text" id="email" placeholder='Email' onChange={(e) => {user.email = e.target.value}} defaultValue={user.email} required />
                    {/* <Field name='email' component={renderField} type="email" placeholder='Email' defaultValue={user.email} required/> */}
                    </Col>
                    </Row>
                  </FormGroup>
                </Col>
              </Row>
              <div className="form-actions text-center">
              <Row>
                <Col xs="12" sm="5">
                  <Button type="button" onClick={() => {this.props.dispatch(updateProfile(user))}} className="btn-primary1">Save changes</Button> &nbsp;&nbsp;
                  <Button className="btn-canel">Cancel</Button>
                </Col>
              </Row>
              </div>
            </Form>
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    user: state.client.user
});

Profile = connect(mapStateToProps)(Profile);
export default Profile;
