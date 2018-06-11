import React, {Component} from 'react'
import {Nav,NavItem, NavLink,TabContent,TabPane,Table} from 'reactstrap'
import classnames from 'classnames'
import DonXinChuyenCa from './DonXinChuyenCa'
import DonXinNghiCa from './DonXinNghiCa'
import DonXinUngLuong from './DonXinUngLuong'
import DonXinNghiViec from './DonXinNghiViec'
// show ra các đơn đã gửi đi
class ListApplication extends Component {
    constructor(props) {
        super(props);
    
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
        return(
            <div>
                <Nav tabs className="bg-light">
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '1' })}onClick={() => { this.toggle('1'); }}>
                        <div className="text-blayn"><strong>Đơn xin thay đổi ca</strong></div>   
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '2' })}onClick={() => { this.toggle('2'); }}>
                        <div className="text-blayn"><strong>Đơn xin nghỉ ca</strong></div>   
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '3' })}onClick={() => { this.toggle('3'); }}>
                        <div className="text-blayn"><strong>Đơn xin ứng lương</strong></div>   
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '4' })}onClick={() => { this.toggle('4'); }}>
                        <div className="text-blayn"><strong>Đơn xin nghỉ việc </strong></div>   
                        </NavLink>
                    </NavItem>

                </Nav>
                <TabContent activeTab={this.state.activeTab} className="border-bottom-0 border-left-0 border-right-0">
                    <TabPane tabId="1">
                    <DonXinChuyenCa/>
                    </TabPane>
                    <TabPane tabId="2">
                    <DonXinNghiCa/>
                    </TabPane>
                    <TabPane tabId="3">
                    <DonXinUngLuong/>
                    </TabPane>
                    <TabPane tabId="4">
                    <DonXinNghiViec/>
                    </TabPane>
                    
                </TabContent>
            </div>

        )
    }
}
export default ListApplication;