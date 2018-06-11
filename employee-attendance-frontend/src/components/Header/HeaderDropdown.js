import React, {Component} from 'react';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
} from 'reactstrap';
import{Link} from 'react-router-dom';

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
          <DropdownItem><Link to="/profile"><i className="fa fa-user"></i>Hồ sơ</Link></DropdownItem>
          <DropdownItem><Link to="/draft"><i className="fa fa-user"></i>Tạo ca mẫu</Link></DropdownItem> 
          <DropdownItem><Link to ="/change-password"><i className="fa fa-user"></i>Đổi mật khẩu</Link></DropdownItem>  
          <DropdownItem><Link to ="/logout"><i className="fa fa-lock"></i> Logout</Link></DropdownItem>
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

export default HeaderDropdown;
