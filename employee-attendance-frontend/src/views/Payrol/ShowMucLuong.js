import React, {Component} from 'react'
import {Nav,NavItem, NavLink,TabContent,TabPane,Table} from 'reactstrap'
import classnames from 'classnames'
import {getWageStory} from '../../redux/actions/WageStory'
import {connect} from 'react-redux';
import  { format_number }  from '../../helper/format'
import {fomat_hanpheduyet, format_ngaytao} from '../../helper/format';
class ShowMucLuong extends Component {
    componentDidMount(){
        this.props.dispatch(getWageStory());
    }
    constructor(props) {
        super(props);
 //       this.format_number=this.format_number.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
    }

    
    
    
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
            activeTab: tab
            });
        }
    }

    render(){
        const{ wageStory}=this.props;
        return(
            <div>
                <Nav tabs className="bg-light">
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '1' })}onClick={() => { this.toggle('1'); }}>
                        <div className="text-blayn"><strong>Lịch sử thay đổi mức lương</strong></div>   
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab} className="border-bottom-0 border-left-0 border-right-0">
                    <TabPane tabId="1">
                    <Table bordered hover responsive>
                        <thead className="bg-info">
                            <tr>
                                <th>id</th>
                                <th>Mức lương(VND/1h)</th>
                                <th>Ngày bắt đầu</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wageStory.map(item =>
                                (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{format_number(item.salary)} VNĐ</td>
                                        <td>{fomat_hanpheduyet(item.start_date)}</td>
                                    </tr>  
                                )
                            )}
                        </tbody>
                    </Table>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}
const mapStateToProps = state =>({
    wageStory:state.wageStory
})
export default connect(mapStateToProps)(ShowMucLuong);