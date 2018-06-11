import React, {Component} from 'react';
import {
  Nav,
  NavItem,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  Badge
} from 'reactstrap';
import HeaderDropdown from './HeaderDropdown';
import ApplicationDropdown from './ApplicationDropdown';
import PayrolDropdown from './PayrolDropdown';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
class Header extends Component {
  render() {
    const {user}=this.props
    return (
      <header className="app-header navbar">
        <Nav  navbar>
        &nbsp;&nbsp;&nbsp;
          <NavItem className="px-3">
            <Link to="/show-shift"><NavLink><strong><i className="fa fa-calendar"/></strong></NavLink></Link>
          </NavItem>
          <NavItem className="px-3">
            < ApplicationDropdown/> 
          </NavItem>
          <NavItem className="px-1">
            <PayrolDropdown/>
          </NavItem>
          
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem  className="d-md-down-none">
          {/* //'img/avatars/6.jpg' */}
            <NavLink><img src={user.avatar} className="img-avatar" alt=""/></NavLink>
           </NavItem>
          <div className="text-white d-md-down-none">
            {user.name}
          </div>
          <NavItem >
            <Link to="/notification"> <NavLink><i className="icon-bell"/></NavLink></Link>
          </NavItem>
          <NavItem >
            
            <NavLink><Link to="/message"><i className="fa fa-envelope-o"></i></Link></NavLink>
          </NavItem>
          <HeaderDropdown/>
        </Nav>
      </header>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.client.user
  };
}

export default connect(mapStateToProps)(Header)

