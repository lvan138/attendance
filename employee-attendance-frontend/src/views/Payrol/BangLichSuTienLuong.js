import React, {Component} from 'react'
import {Table} from 'reactstrap'
import {connect} from 'react-redux'
import {getPayrolls} from '../../redux/actions/payroll'
import  { format_number }  from '../../helper/format'
import {Link} from 'react-router-dom'
import Detail from './Detail'
class BangLichSuTienLuong extends Component{
   
        componentDidMount(){
            this.props.dispatch(getPayrolls());
        }
    
    render(){
        const { payrolls} = this.props;
        console.log(payrolls);
        return (
            <div>
                <h5 className="text-blayn">Lịch sử tiền lương</h5>
                <hr/>
                <Table bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Tháng</th>
                            <th>Tiền lương (VNĐ)</th>
                            <th>Xem chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                    {payrolls.map(item =>(
                        <tr>
                            <td>{item.time}</td>
                            <td>{format_number(item.amount)} VNĐ</td>
                            <td><Detail time={item.time}/></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    payrolls: state.payrolls
});

BangLichSuTienLuong = connect(mapStateToProps)(BangLichSuTienLuong);

export default BangLichSuTienLuong