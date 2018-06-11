import React, {Component} from 'react';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
} from 'reactstrap';
import{Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { LOGOUT } from '../../redux/actions/constants';

const logout = () => ({
    type: LOGOUT
})
class HeaderDropdown extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  dropAccnt() {
    return (
      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
        <strong><i className="icon-settings"></i></strong>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem><Link to="/profile"><i className="fa fa-user"></i> Profile</Link></DropdownItem>
          <DropdownItem><Link to="/employees"><i className="fa fa-user"></i> Staff Managerment</Link></DropdownItem>
          <DropdownItem><Link to="/wage"><i className="fa fa-user"></i> Wage Managerment</Link></DropdownItem>      
          <DropdownItem><Link to ="/change-password"><i className="fa fa-user"></i> Change Password</Link></DropdownItem>  
          <DropdownItem><Link to=''><a onClick={() => this.props.dispatch(logout())}><i className="fa fa-lock"></i> Logout</a></Link></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  render() {
    const {...attributes} = this.props;
    return (
      this.dropAccnt()
    );
  }
}

const mapStateToProps = state => ({
  state
})
HeaderDropdown = connect(mapStateToProps)(HeaderDropdown)
export default HeaderDropdown;
