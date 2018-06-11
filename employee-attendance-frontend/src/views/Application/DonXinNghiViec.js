import React, {Component} from 'react'
import {Table} from 'reactstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getLeave} from '../../redux/actions/leave'
import {fomat_hanpheduyet, format_ngaytao} from '../../helper/format';
class DonXinNghiViec extends Component{

    componentDidMount(){
        this.props.dispatch(getLeave());
    }
    render(){
        const {leave}=this.props;
        

        return(
            <div>
                <h5 className="text-blayn">Đơn xin nghỉ việc</h5>
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
                            {leave.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>Xin nghỉ việc</td>
                                    <td>
                                        - Ngày bắt đầu xin nghỉ việc: {fomat_hanpheduyet(item.day)}<br/>
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
    leave: state.leave
})


export default connect(mapStateToProps)( DonXinNghiViec);