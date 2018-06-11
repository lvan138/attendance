import React, {Component} from 'react'
import {Table, Card, CardBody,CardHeader} from 'reactstrap'
import {connect} from 'react-redux'
import {getAttendance} from '../../redux/actions/attendance'
import {fomat_hanpheduyet, format_time} from '../../helper/format';
class BangChamCong extends Component{
    componentDidMount(){
        this.props.dispatch(getAttendance());
    }
    render(){
        const today = new Date()
        const { user ,attendance} = this.props;
        return(
            <div>
                <Card>
                    <CardHeader className="text-center text-blayn border-top ">
                        <strong>BẢNG CHẤM CÔNG</strong>
                        <br/>
                        Tháng {today.getMonth()+1}/{today.getFullYear()}
                        <br/>
                        {user.name}
                    </CardHeader>
                    <CardBody>
                        <Table bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Ngày</th>
                                    <th>Ca</th>
                                    <th>Thời gian Vào</th>
                                    <th>Thời gian Ra</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                            {attendance.map(item =>(
                                <tr>
                                    <td>{fomat_hanpheduyet(item.shift_day)}</td>
                                    <td>{item.shift_name}</td>
                                    <td>{format_time(item.in_time)}</td>
                                    <td>{format_time(item.out_time)}</td>
                                    
                                </tr>
                            ))}  
                            </tbody>
                        </Table>
                        </CardBody>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.client.user,
    attendance: state.attendance
});

BangChamCong = connect(mapStateToProps)(BangChamCong);
export default BangChamCong;
