import React from 'react'

import {Col,Row,Breadcrumb,BreadcrumbItem,  TabContent, TabPane, Nav, NavItem, NavLink,Table, Card, CardBody,CardHeader, Button}from 'reactstrap'
import {Link} from 'react-router-dom'
import classnames from 'classnames'
import XoaBangLuongCuaNhanVien from './XoaBangLuongCuaNhanVien';
import SuaBangLuongCuaNhanVien from './SuaBangLuongCuaNhanVien';
import { connect } from 'react-redux'
import { getPayrollEmployyee } from '../../redux/actions/payroll';
import { formatDate } from '../../helper/formatDate'
import { format_number } from '../../helper/format'

class BangLuongCuaNhanVien extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
    }

    componentDidMount() {
        let id = this.props.match.params.userId
        let month = this.props.location.month
        let year = this.props.location.year
        let user = this.props.location.user

        this.props.dispatch(getPayrollEmployyee({id, month, year}))
    }
    
    toggle(tab) {
    if (this.state.activeTab !== tab) {
        this.setState({
        activeTab: tab
        });
    }
    }
    render(){
        let month = this.props.location.month
        let year = this.props.location.year
        let user = this.props.location.user
        const {payrolls} = this.props

        var total = 0
        payrolls.map(item => total += parseInt(item.amount))
        return(
            <div>
                <Nav tabs className="bg-light">
                    <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '1' })}onClick={() => { this.toggle('1'); }}>
                    <div className="text-blayn"><strong>Bảng lương chi tiết</strong></div>   
                    </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab} className="border-bottom-0 border-left-0 border-right-0">
                    <TabPane tabId="1">
                        <Row>
                        <Col>
                        <h5 className="text-blayn">Bảng lương chi tiết</h5>
                        </Col>
                        <Col className="text-right">
                        <Link to="/payrol"><i className="fa fa-arrow-left"></i>Thống kê lương cửa hàng</Link>
                        </Col>
                        </Row>
                        <hr/>
                        <div className="text-right text-blayn">
                            <Button color="link"><i className="fa fa-cloud-download"></i>&nbsp; Xuất file thống kê</Button>
                        </div>
                        <Card>
                            <CardHeader className="text-center text-blayn">
                                <h5>Bảng lương chi tiết</h5>
                                Tháng {month}/{year}
                                <br/>
                                {user}
                            </CardHeader>
                            <CardBody>
                                <Table bordered hover responsive>
                                    <thead>
                                        <tr>
                                            <th>Ngày</th>
                                            <th>Tiền lương tương ứng (VNĐ)</th>
                                            <th>Ứng lương </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {payrolls.map(
                                            item => (
                                                <tr>
                                                    <td>{formatDate(item.date)}</td>
                                                    <td>{format_number(item.amount)} VNĐ</td>
                                                    <td></td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </Table>
                                <div className="text-blayn"><strong>Tổng tiền lương: {format_number(total)} VNĐ</strong></div>
                                <div className="text-danger">Tiền ứng lương: 0 VNĐ</div>
                            </CardBody>
                        </Card>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    payrolls: state.payrollEmployee
})
BangLuongCuaNhanVien = connect(mapStateToProps)(BangLuongCuaNhanVien)
export default BangLuongCuaNhanVien