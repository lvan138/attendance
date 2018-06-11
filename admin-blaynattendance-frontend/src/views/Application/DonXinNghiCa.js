import React, {Component} from 'react'
import {Table} from 'reactstrap'
import {Link} from 'react-router-dom'
import { formatDate } from '../../helper/formatDate';

export default class DonXinNghiCa extends Component{
    render(){
        const { leaveShiftRequest } = this.props
        return(
            <div>
                <h5 className="text-blayn">Đơn xin nghỉ ca</h5>
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
                                {
                                    leaveShiftRequest.map(
                                        item => (
                                            <tr>
                                                <td>{leaveShiftRequest.indexOf(item) + 1}</td>
                                                <td>{item.user}</td>
                                                <td>Xin nghỉ ca</td>
                                                <td>
                                                    - Ngày có ca xin nghỉ: {formatDate(item.date)}<br/>
                                                    - Ca xin nghỉ: {item.old_shift}<br/>
                                                    - Lý do: {item.description}<br/>
                                                </td>
                                                <td>{item.created_at ? formatDate(item.created_at.split(' ')[0]) : ''}</td>
                                                <td><Link to="/phe-duyet-dxnc">Phê duyệt</Link></td>
                                            </tr>
                                        )
                                    )
                                }   
                            </tbody>
                        </Table>
                        <hr/>
            </div>
        )
    }
}