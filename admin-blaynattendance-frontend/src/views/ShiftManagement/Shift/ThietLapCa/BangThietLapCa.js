import React, {Component} from 'react'
import {Table} from 'reactstrap'
import EditThietLapCa from './EditThietLapCa'
import DeleteThietLapCa from './DeleteThietLapCa'
import { connect } from 'react-redux'
import { getShiftMaster } from '../../../../redux/actions/shiftMasters';
import { formatDate } from '../../../../helper/formatDate'

class BangThietLapCa extends Component{
    componentDidMount() {
        this.props.dispatch(getShiftMaster())
    }

    render(){
        const { shiftMasters } = this.props
        return(
            <div>
                <h5 className="text-blayn">Lên ca làm việc cho cửa hàng</h5>
                <hr/>
                <Table bordered striped responsive>
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>Tên ca</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            shiftMasters.map(shiftMaster => (
                                <tr>
                                <th scope="row">{shiftMaster.id}</th>
                                <td>{shiftMaster.shift_pattern}</td>
                                <td>{formatDate(shiftMaster.start_date)}</td>
                                <td>{formatDate(shiftMaster.end_date)}</td>
                                <td><EditThietLapCa shiftMaster={shiftMaster} /></td>
                                <td><DeleteThietLapCa id={shiftMaster.id}/></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    shiftMasters: state.shiftMasters
})
BangThietLapCa = connect(mapStateToProps)(BangThietLapCa)
export default BangThietLapCa