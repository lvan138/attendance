import React from 'react'

import {Col,Row,Breadcrumb,BreadcrumbItem,  TabContent, TabPane, Nav, NavItem, NavLink,Table, Card, CardBody,CardHeader }from 'reactstrap'
import {Link} from 'react-router-dom'
import classnames from 'classnames'
import BangLuongCuaHang from './BangLuongCuaHang'

class Payrol extends React.Component{
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
            <div className="text-blayn"><strong> Tiền lương</strong></div>   
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="border-bottom-0 border-left-0 border-right-0">
          <TabPane tabId="1">
            <BangLuongCuaHang/>
          </TabPane>
        </TabContent>
      </div>
        )
    }
}

export default Payrol