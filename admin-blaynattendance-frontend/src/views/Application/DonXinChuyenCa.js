import React, {Component} from 'react'
import {Table} from 'reactstrap'
import {Link} from 'react-router-dom'
import { formatDate } from '../../helper/formatDate';

export default class DonXinChuyenCa extends Component{
    render(){
        const { changeShiftRequest } = this.props
        return(
            <div>
                <h5 className="text-blayn">Đơn xin chuyển ca</h5>
                        <Table bordered hover responsive>
                            <thead className="bg-info">
                                <tr>
                                    <th>STT</th>
                                    <th>Người gửi</th>
                                    <th>Loại đơn</th>
                                    <th>Yêu cầu</th>
                                    <th>Ngày tạo</th>
                                    <th>Phê duyệt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {changeShiftRequest.map(
                                    item => (
                                    <tr>
                                        <td>{changeShiftRequest.indexOf(item) + 1 }</td>
                                        <td>{item.user}</td>
                                        <td>Xin thay đổi ca</td>
                                        <td>
                                            - Ngày xin thay đổi ca: {formatDate(item.date)}<br/>
                                            - Ca hiện tại: {item.old_shift}<br/>
                                            - Xin thay đổi sang: {item.shift_change}<br/>
                                            - Lý do: {item.description}<br/>
                                        </td>
                                        <td>1/3/2018</td>
                                        <td><Link to="/phe-duyet-dxcc">Phê duyệt</Link></td>
                                    </tr>))
                                }                               
                            </tbody>
                        </Table>
                        <hr/>
            </div>
        )
    }
}