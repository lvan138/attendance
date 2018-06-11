import React, {Component} from 'react';
import {Table} from 'reactstrap';
import EditWage from './EditWage';
import DeleteWage from './DeleteWage';
import { getWageStory } from '../../redux/actions/WageGroup';
import { connect } from 'react-redux';
class StoryWage extends Component {
    componentDidMount() {
        this.props.dispatch(getWageStory());
    }

    render(){
        const { wageStory } = this.props;
        return (
            <div>
                <h5 className="text-blayn">Bảng lịch sử thay đổi mức lương</h5>
                <hr/>
                <Table bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Tên nhóm mức lương</th>
                            <th>Mức lương (VNĐ/ 1h)</th>
                            <th>Ngày bắt đầu</th>
                            {/* <th>Sửa</th>
                            <th>Xóa</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {wageStory.map(item =>
                            (
                                <tr>
                                <td>{item.wage_group}</td>
                                <td>{item.salary}</td>
                                <td>{item.start_date}</td>
                                </tr>
                            )
                        )}
                        
                    </tbody>
                </Table>    
            </div>
        );
    }
}
const mapStateToProps = state => ({
    wageStory: state.wageStory
})

export default connect(mapStateToProps)(StoryWage)