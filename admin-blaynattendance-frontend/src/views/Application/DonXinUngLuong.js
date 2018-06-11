import React, {Component} from 'react'
import {Table} from 'reactstrap'
import {Link} from 'react-router-dom'
import { formatDate } from '../../helper/formatDate'
import { format_number } from '../../helper/format'

export default class DonXinUngLuong extends Component{
    render(){
        const { payrollRequest } = this.props
        return(
            <div>
                <h5 className="text-blayn">Đơn xin ứng lương</h5>
                        <Table bordered hover responsive>
                            <thead className="bg-info">
                                <tr>
                                    <th>id</th>
                                    <th>Người gửi</th>
                                    <th>Loại đơn</th>
                                    <th>Yêu cầu</th>
                                    <th>Ngày tạo</th>
                                    <th>Phê duyệt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payrollRequest.map(
                                    item => (
                                        <tr>
                                            <td>{payrollRequest.indexOf(item) + 1}</td>
                                            <td>{item.user}</td>
                                            <td>Xin ứng lương</td>
                                            <td>
                                                - Ngày xin ứng lương: {formatDate(item.time)}<br/>
                                                - Số tiền xin ứng: {format_number(item.amount)} VNĐ<br/>
                                                - Lý do: {item.description}<br/>
                                            </td>
                                            <td>{item.created_at ? formatDate(item.created_at.split(' ')[0]) : ''}</td>
                                            <td><Link to="/phe-duyet-dxnc">Phê duyệt</Link></td>
                                        </tr>
                                    )
                                )}                                
                            </tbody>
                        </Table>
                        <hr/>
            </div>
        )
    }
}