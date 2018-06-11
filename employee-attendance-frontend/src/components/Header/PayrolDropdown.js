import React, {Component} from 'react';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
} from 'reactstrap';
import{Link} from 'react-router-dom';

class PayrolDropdown extends Component {

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
        <strong><i className="fa fa-calendar-check-o"/></strong>
        </DropdownToggle>
        <DropdownMenu left>
          <DropdownItem><Link to="/payrol">Chấm công</Link></DropdownItem>      
          <DropdownItem><Link to ="/don-ung-luong">Tạo đơn ứng lương</Link></DropdownItem>
          <DropdownItem><Link to ="/show-muc-luong">Bảng mức lương</Link></DropdownItem>  
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

export default PayrolDropdown;
