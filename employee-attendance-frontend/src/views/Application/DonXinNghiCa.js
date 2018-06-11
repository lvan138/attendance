import React, {Component} from 'react'
import {Table} from 'reactstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getLeaveShift} from '../../redux/actions/leaveShift'
import {fomat_hanpheduyet, format_ngaytao} from '../../helper/format';
class DonXinNghiCa extends Component{
    componentDidMount(){
        this.props.dispatch(getLeaveShift());
    }

    render(){
        const {leaveShift}=this.props;
        return(
            <div>
                <h5 className="text-blayn">Đơn xin nghỉ ca</h5>
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
                            {leaveShift.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>Xin nghỉ ca</td>
                                    <td>
                                        - Ngày có ca xin nghỉ: {fomat_hanpheduyet(item.date)}<br/>
                                        - Ca xin nghỉ: {item.name}<br/>
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
const mapStateToProps = state =>({
    leaveShift: state.leaveShift
})


export default connect(mapStateToProps)( DonXinNghiCa);