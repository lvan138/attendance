import React from 'react'

import {Col,Row,Breadcrumb,BreadcrumbItem,
    TabContent, TabPane, Nav, NavItem, NavLink,Table, Card, CardBody,CardHeader, Button,
    Form, FormGroup, Input, Label,
}from 'reactstrap'
import {Link} from 'react-router-dom'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { format_number } from '../../helper/format'
import { getPayroll } from '../../redux/actions/payroll';
class BangLuongCuaHang extends React.Component{
    constructor(props) {
        super(props);

        const today = new Date()
        this.state = {
            month: today.getMonth() + 1,
            year: today.getFullYear()
        };

        this.handleChangeMonth = this.handleChangeMonth.bind(this)
        this.handleChangeYear = this.handleChangeYear.bind(this)
    }

    componentDidMount() {
        let month = this.state.month
        let year = this.state.year

        this.props.dispatch(getPayroll({month, year}))
    }

    handleChangeMonth(e) {
        this.setState({
            month: e.target.value
        })
        
        let month = e.target.value
        let year = this.state.year

        this.props.dispatch(getPayroll({month, year}))
    }
    
    handleChangeYear(e) {
        this.setState({
            year: e.target.value
        })

        let month = this.state.month
        let year = e.target.value

        this.props.dispatch(getPayroll({month, year}))
    }

    render(){
        const today = new Date()
        const { payrolls } = this.props

        var total = 0
        payrolls.map(item => total += parseInt(item.total))
        return(
            <div>
                <h5 className="text-blayn">Thống kê lương</h5>
                <hr/>
                <div className="text-center text-blayn">
                
                    <h5>Tháng {this.state.month}/{this.state.year}</h5>
                    <div className="text-center">
                    <Form className="text-center">
                    <Row className="text-center">         
                    <FormGroup>
                        <Input type="select" name="ccmonth" id="ccmonth" defaultValue={this.state.month} onChange={this.handleChangeMonth}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type="select" name="ccyear" id="ccyear" defaultValue={this.state.year} onChange={this.handleChangeYear}>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                        </Input>
                    </FormGroup>
                    </Row>
                    </Form>

                    </div>
                </div>
                <div className="text-right text-blayn">
                    <Button color="link"><i className="fa fa-cloud-download"></i>&nbsp; Xuất file thống kê</Button>
                </div>
                <Table bordered hover responsive>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên nhân viên</th>
                            <th>Tiền lương</th>
                            <th>Xem chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payrolls.map(
                            item => (
                                <tr>
                                    <td>{payrolls.indexOf(item) + 1}</td>
                                    <td>{item.user}</td>
                                    <td id='payroll'>{format_number(item.total)} VNĐ</td>
                                    <td><Link to={{pathname: "/bang-luong-cua-nhan-vien/"+item.user_id,
                                                month: this.state.month,
                                                year: this.state.year,
                                                user: item.user
                                                }} >
                                        <Button color="link">Chi tiết</Button></Link>
                                    </td>
                                </tr>
                            )
                        )}
                        
                        <tr>
                            <td colspan="2" className="text-center">Tổng</td>
                            <td>{format_number(total)} VNĐ</td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    payrolls: state.payroll
})

BangLuongCuaHang = connect(mapStateToProps)(BangLuongCuaHang)
export default BangLuongCuaHang