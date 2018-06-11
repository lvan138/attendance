
import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,
Form,FormGroup, Label, Input,
Table, Pagination, PaginationItem,   PaginationLink,
InputGroup, InputGroupAddon,
Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import classnames from 'classnames';
import { Link} from 'react-router-dom';
import DeleteEmployees from '../DeleteEmployees/DeleteEmployees';
import AddEmployee from '../AddEmployees/AddEmployees';
import Position from '../Positions/Positions';
import { getUser } from '../../../redux/actions/users';
import { connect } from 'react-redux';
import { formatDate } from '../../../helper/formatDate' 
import { getUserGroup } from '../../../redux/actions/userGroups';

class Employees extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  componentDidMount() {
    this.props.dispatch(getUser());
    this.props.dispatch(getUserGroup());
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const { users } = this.props;
    return (
      <div>
        <Nav tabs className="bg-light">
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}onClick={() => { this.toggle('1'); }}>
            <div className="text-blayn"><strong>Nhân viên</strong></div>   
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}onClick={() => { this.toggle('2'); }}>
            <div className="text-blayn"><strong>Thêm nhân viên</strong></div>   
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '3' })}onClick={() => { this.toggle('3'); }}>
            <div className="text-blayn"><strong>Nhóm nhân viên</strong></div>   
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="border-bottom-0">
          <TabPane tabId="1">
            <h5 className="text-blayn">Danh sách nhân viên</h5>
            <hr/>
            <Row>
              <Col xs="12" sm="12">
                <div className="border-0 bg-light">
                  <Row className="text-search-alpha">
                    <Col xs="12" sm="2">
                      <strong>Chữ cái</strong>
                    </Col>
                    <Col xs="12" sm="10">
                      <div className="anpha ">
                      <ul className="list-inline">
                        <li class="list-inline-item border  bg-primary text-center">Tất cả</li>
                        <li class="list-inline-item border  bg-white text-center">A</li>
                        <li class="list-inline-item border bg-white text-center">B</li>
                        <li class="list-inline-item border  bg-white text-center">C</li>
                        <li class="list-inline-item border  bg-white text-center">D</li>
                        <li class="list-inline-item border  bg-white text-center">E</li>
                        <li class="list-inline-item border  bg-white text-center">F</li>
                        <li class="list-inline-item border  bg-white text-center">G</li>
                        <li class="list-inline-item border  bg-white text-center">H</li>
                        <li class="list-inline-item border  bg-white text-center">I</li>
                        <li class="list-inline-item border  bg-white text-center">J</li>
                        <li class="list-inline-item border  bg-white text-center">K</li>
                        <li class="list-inline-item border  bg-white text-center">L</li>
                        <li class="list-inline-item border  bg-white text-center">M</li>
                        <li class="list-inline-item border  bg-white text-center">N</li>
                        <li class="list-inline-item border  bg-white text-center">O</li>
                        <li class="list-inline-item border  bg-white text-center">P</li>
                        <li class="list-inline-item border  bg-white text-center">Q</li>
                        <li class="list-inline-item border  bg-white text-center">R</li>
                        <li class="list-inline-item border  bg-white text-center">S</li>
                        <li class="list-inline-item border  bg-white text-center">T</li>
                        <li class="list-inline-item border  bg-white text-center">V</li>
                        <li class="list-inline-item border  bg-white text-center">W</li>
                        <li class="list-inline-item border  bg-white text-center">X</li>
                        <li class="list-inline-item border  bg-white text-center">Y</li>
                        <li class="list-inline-item border  bg-white text-center">Z</li>
                      </ul>
                      </div>
                    </Col>
                  </Row>
                  <Row className="text-search">
                    <Col xs="12" sm="12"><div className="line"></div></Col>
                  </Row>
                  <Row className="text-search-alpha">
                    <Col xs="12" sm="2">
                      <strong>Nhóm nhân viên</strong>
                    </Col>
                    <Col xs="12" sm="10">
                      <FormGroup check className="checkbox">
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox1">Tất cả vị trí</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox2">Quản lý</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox3">Phục vụ</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox3">Bảo vệ</Label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="text-search">
                    <Col xs="12" sm="12"><div className="line"></div></Col>
                  </Row>
                  <br/>
                </div>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col>
              <div className="text-blayn1"><strong>Tổng số: {users.length} nhân viên</strong></div>
              <div>
              <Table hover responsive bordered>
                <thead className="bg-light">
                  <tr>
                    <th>id</th>
                    {/* <th>avatar</th> */}
                    <th>Tên nhân viên</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Địa chỉ</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                    <th>Nhóm nhân viên</th>
                    <th>Status</th>
                    <th>Sửa</th>
                    <th>Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr>
                      <th scope="row">{user.id}</th>
                      {/* <td> <img src={'img/avatars/6.jpg'} alt="admin@bootstrapmaster.com"/></td> */}
                      <td>{user.name}</td>
                      <td>{formatDate(user.date_of_birth)}</td>
                      <td>{user.gender == 1 ? 'Nam' : 'Nữ'}</td>
                      <td>{user.address}</td>
                      <td>{user.phone_number}</td>
                      <td>{user.email}</td>
                      <td>{user.user_group}</td>
                      <td>
                        {user.status == 1 ? (<Label className="switch switch-xs switch-text switch-primary">
                          <Input type="checkbox" className="switch-input" defaultChecked/>
                          <span className="switch-label" data-on="On" data-off="Off"></span>
                          <span className="switch-handle"></span>
                        </Label>) : 
                          (<Label className="switch switch-xs switch-text switch-primary">
                          <Input type="checkbox" className="switch-input"/>
                          <span className="switch-label" data-on="On" data-off="Off"></span>
                          <span className="switch-handle"></span>
                        </Label>)}
                      </td>
                      <td><div className="button-edit"><Link to={'/edit-employees/'+user.id } user={user}><i className="fa fa-edit"></i></Link></div></td>
                      <td><div className="button-edit"><DeleteEmployees id={user.id}><i className="fa fa-trash-o"></i></DeleteEmployees></div></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              {/* <Row>
                <Col xs="12" sm="12">
                <Pagination >
                  <PaginationItem disabled><PaginationLink previous href="#"></PaginationLink></PaginationItem>
                      <PaginationItem active>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next href="#"></PaginationLink></PaginationItem>
                </Pagination>
                </Col>
              </Row> */}
              </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">     
            <AddEmployee/>
          </TabPane>
          <TabPane tabId="3">
            <Position/>
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users,
  userGroups: state.userGroups
})

Employees = connect(mapStateToProps)(Employees);
export default Employees;
