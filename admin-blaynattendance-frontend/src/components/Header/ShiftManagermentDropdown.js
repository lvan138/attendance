import React, {Component} from 'react';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
} from 'reactstrap';
import{Link} from 'react-router-dom';

class ShiftManagermentDropdown extends Component {

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
        <strong><i className="icon-calendar"/></strong>
        </DropdownToggle>
        <DropdownMenu left>
          <DropdownItem><Link to="/shift-of-staff"><i className="fa fa-user"></i>Lịch làm việc của nhân viên</Link></DropdownItem>
          <DropdownItem><Link to="/show-shift-calendar"><i className="fa fa-user"></i>Tạo ca cho nhân viên</Link></DropdownItem>
          <DropdownItem><Link to="/show-shift"><i className="fa fa-user"></i>Tạo ca</Link></DropdownItem>     
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

export default  ShiftManagermentDropdown;
