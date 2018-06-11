import React, {Component} from 'react';
import {
  Row,
  Col,
  Table, 
  Collapse, Button

} from 'reactstrap';

import {connect} from 'react-redux'
import {fomat_hanpheduyet, format_time} from '../../helper/format';
import  { format_number }  from '../../helper/format'
// import {getComment} from '../../redux/actions/notification'
import {getAttendances} from '../../redux/actions/chamcong'
import {getPayrollss} from '../../redux/actions/payrolls'
class Detail extends Component {
  

  
  componentDidMount(){
    this.props.dispatch(getAttendances());
    this.props.dispatch(getPayrollss());
  }
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
   
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render(){
    // const {comment,user}=this.props;
    // let comments = comment.filter(x => x.notification_id == this.props.id )
    const {attendances, payrollss}=this.props;
    let att= attendances.filter(x => x.time == this.props.time );
    let pay=payrollss.filter(x => x.time == this.props.time );
    return(
      <div>
        <Button color="link" onClick={this.toggle} >Chi tiết</Button>
        <Collapse isOpen={this.state.collapse} style={{paddingLeft:'15px'}}>
          <Row>
              <Col xs="12" sm="12" md="7">
              Bảng chấm công
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
                    
                    {att.map(item =>(
                        <tr>
                            <td>{fomat_hanpheduyet(item.shift_day)}</td>
                            <td>{item.shift_name}</td>
                            <td>{format_time(item.in_time)}</td>
                            <td>{format_time(item.out_time)}</td>
                            
                        </tr>
                    ))}  
                    
                    </tbody>
                </Table>
              </Col>
              <Col  xs="12" sm="12" md="5">
              Bảng tính lương
              <Table bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Ngày</th>
                            <th>Tiền lương</th>
                        </tr>
                    </thead>
                    <tbody>
                    {pay.map(item =>(
                        <tr>
                            <td>{fomat_hanpheduyet(item.date)}</td>
                            <td>{format_number(item.amount)} VNĐ</td>
                            
                        </tr>
                    ))}
                    </tbody>
                </Table>
              </Col>
          </Row>
        </Collapse>
      </div>
    );
  }
}
function mapStateToProps(state){
  
  return{
  attendances: state.attendances,
  payrollss: state.payrollss,
 
  }
}

export default connect(mapStateToProps)(Detail);
