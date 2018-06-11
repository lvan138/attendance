import React, {Component} from 'react'
import {Nav,NavItem, NavLink,TabContent,TabPane, Col,Row} from 'reactstrap'
import classnames from 'classnames'
import ApplyForLeave from './ApplyForLeave'


import Feedback from './Feedback'
class CreateApplication extends Component {
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
                        <div className="text-blayn"><strong>Đơn xin nghỉ việc</strong></div>   
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '2' })}onClick={() => { this.toggle('2'); }}>
                        <div className="text-blayn"><strong>Đơn phản hồi</strong></div>   
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab} className="border-bottom-0 border-left-0 border-right-0">
               
                <TabPane tabId="1">
                {/* Don xin nghỉ việc */}
                <ApplyForLeave/>
                </TabPane>
                <TabPane tabId="2">
                {/* Don phản hồi */}
                <Feedback/>
                </TabPane>
                </TabContent>
            </div>

        )
    }
}
export default CreateApplication;