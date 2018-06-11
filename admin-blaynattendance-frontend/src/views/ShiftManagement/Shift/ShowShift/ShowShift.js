import React, {Component} from 'react';
import { Container,Row, Table, Button, Card, CardHeader, CardBody, Pagination,PaginationItem,PaginationLink,
  Modal, ModalHeader, ModalBody, ModalFooter,
Nav, NavItem, NavLink, TabPane,TabContent } from 'reactstrap';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import AddShift from '../AddShift/AddShift'
import DeleteShift from '../DeleteShift/DeleteShift'
import EditShift from '../EditShift/EditShift'
import BangThietLapCa from '../ThietLapCa/BangThietLapCa'
import ThietLapCa from '../ThietLapCa/ThietLapCa'
import { connect } from 'react-redux'
import { getShiftPattern } from '../../../../redux/actions/shiftPatterns';

class ShowShift extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  componentDidMount() {
    this.props.dispatch(getShiftPattern());
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { shiftPatterns } = this.props
    return (
      <div>
        <Nav tabs className="bg-light">
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}onClick={() => { this.toggle('1'); }}>
            <div className="text-blayn"><strong>Tạo khung ca trong một ngày</strong></div>   
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}onClick={() => { this.toggle('2'); }}>
            <div className="text-blayn"><strong>Lên ca làm việc cho cửa hàng</strong></div>   
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="border-bottom-0 border-left-0 border-right-0">
          <TabPane tabId="1">
            <h5 className="text-blayn">Khung ca trong một ngày</h5>
            <hr/>
            <Table bordered striped responsive>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Tên ca</th>
                  <th>Giờ bắt đầu</th>
                  <th>Giờ kết thúc</th>
                  <th>Hệ số lương</th>
                  <th>Sửa</th>
                  <th>Xóa</th>
                </tr>
              </thead>
              <tbody>
                {
                  shiftPatterns.map(shiftPattern => (
                    <tr>
                    <th scope="row">{shiftPattern.id}</th>
                    <td>{shiftPattern.name}</td>
                    <td>{shiftPattern.start_time}</td>
                    <td>{shiftPattern.end_time}</td>
                    <td>{shiftPattern.factor_salary}</td>
                    <td><EditShift shiftPattern={shiftPattern}/></td>
                    <td><DeleteShift id={shiftPattern.id}/></td>
                  </tr>
                  ))
                }
              </tbody>
            </Table>
            <br/>
            <AddShift/>
          </TabPane>
          <TabPane tabId="2">
            <BangThietLapCa/>
            <br/>
            <ThietLapCa/>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

const mapDispatchToProps = state => ({
  shiftPatterns : state.shiftPatterns
})

ShowShift = connect(mapDispatchToProps)(ShowShift)
export default ShowShift