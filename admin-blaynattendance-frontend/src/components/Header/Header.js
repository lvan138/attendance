import React, {Component} from 'react';
import {
  Nav,
  NavItem,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  Badge
} from 'reactstrap';
import {Link} from 'react-router-dom';
import HeaderDropdown from './HeaderDropdown';
import ShiftManagermentDropdown from './ShiftManagermentDropdown';
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    const { user } = this.props
    return (
      <header className="app-header navbar">
        <Nav  navbar>
          <NavItem className="px-3">
            <NavLink><Link to="/cham-cong"><strong><i className="icon-clock"/></strong></Link></NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#"><ShiftManagermentDropdown/></NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#"><Link to="/payroll"><strong><i className="icon-chart"/></strong></Link></NavLink>
          </NavItem>
          &nbsp;&nbsp;
          <NavItem className="px-3">
            <NavLink href="#"><Link to="/application"><strong><i className="fa fa-wpforms"/></strong></Link></NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem  className="d-md-down-none">
            <NavLink><img src={'img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/></NavLink>
           </NavItem>
          <div className="text-white d-md-down-none">
            {user.name}
          </div>
          <NavItem >
            {/* <Link to="/notification"><i className="icon-bell"><Badge pill color="danger">5</Badge></i></Link> */}
            <NavLink><Link to="/notification"><i className="icon-bell"></i></Link></NavLink>
          </NavItem>
          
          {/* <NavItem >
            
            <NavLink><Link to="/message"><i className="fa fa-envelope-o"></i><Badge pill color="danger">1</Badge></Link></NavLink>
          </NavItem> */}
          <HeaderDropdown/>
        </Nav>
      </header>
    );
  }
}
const mapStateToProps = state => ({
    user: state.client.user
})
Header = connect(mapStateToProps)(Header)
export default Header;
