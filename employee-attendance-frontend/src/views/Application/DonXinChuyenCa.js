import React, {Component} from 'react'
import {Table} from 'reactstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getChangeShift} from '../../redux/actions/changeShift'
import {fomat_hanpheduyet, format_ngaytao} from '../../helper/format';
class DonXinChuyenCa extends Component{
    componentDidMount(){
        this.props.dispatch(getChangeShift());
    }
    render(){

        const {changeShift}=this.props
        return(
            <div>
                <h5 className="text-blayn">Đơn xin chuyển ca</h5>
                        <Table bordered hover responsive>
                            <thead className="bg-info">
                                <tr>
                                    <th >id</th>
                                    <th >Loại đơn</th>
                                    <th >Yêu cầu</th>
                                    <th >Ngày tạo</th>
                                    <th >Hạn phê duyệt</th>
                                    <th >Tình trạng</th>
                                </tr>
                            </thead>
                            <tbody>
                            {changeShift.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>Xin thay đổi ca</td>
                                    <td>
                                        - Ngày xin thay đổi ca: {fomat_hanpheduyet(item.date)}<br/>
                                        - Ca hiện tại: {item.name_old}<br/>
                                        - Xin thay đổi sang: {item.name_change}<br/>
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
    changeShift: state.changeShift
})


export default connect(mapStateToProps)( DonXinChuyenCa);