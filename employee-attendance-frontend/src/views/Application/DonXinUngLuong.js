import React, {Component} from 'react'
import {Table} from 'reactstrap'
import {Link} from 'react-router-dom'
import {connect } from 'react-redux'
import { getPayroll } from '../../redux/actions/ungLuong';
import  { format_number }  from '../../helper/format';
import {fomat_hanpheduyet, format_ngaytao} from '../../helper/format';
class DonXinUngLuong extends Component{
  
    componentDidMount(){
        this.props.dispatch(getPayroll());
    }
    render(){
        const {payroll}=this.props;
        
      
        return(
            <div>
                <h5 className="text-blayn">Đơn xin ứng lương</h5>
                        <Table bordered hover responsive>
                            <thead className="bg-info">
                                <tr>
                                    <th>id</th>
                                    <th>Loại đơn</th>
                                    <th>Yêu cầu</th>
                                    <th>Ngày tạo</th>
                                    <th>Hạn phê duyệt</th>
                                    <th>Tình trạng</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                            {payroll.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                   
                                    <td>Xin ứng lương</td>
                                    <td>
                                        - Ngày xin ứng lương: {fomat_hanpheduyet(item.time)}<br/>
                                        - Số tiền xin ứng: {format_number(item.amount)} VNĐ<br/>
                                        - Lý do: {item.description}<br/>
                                    </td>
                                    <td>{format_ngaytao(item.created_at)}</td>
                                    <td>{fomat_hanpheduyet(item.han_phe_duyet)}</td>
                                    <td>{item.pheduyet}</td>
                                </tr>
                            ))}   
                            </tbody>
                        </Table>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    payroll: state.payroll
  })
  
DonXinUngLuong = connect(mapStateToProps)(DonXinUngLuong)
export default DonXinUngLuong