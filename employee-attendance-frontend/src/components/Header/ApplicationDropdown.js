import React, {Component} from 'react';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
} from 'reactstrap';
import{Link} from 'react-router-dom';

class ApplicationDropdown extends Component {

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
        <strong><i className="fa fa-wpforms"></i></strong>
        </DropdownToggle>
        <DropdownMenu left>
          <DropdownItem><Link to="/list-application"><i className="fa fa-user"></i>Xử lý yêu cầu</Link></DropdownItem>      
          <DropdownItem><Link to ="/create-application"><i className="fa fa-user"></i> Tạo yêu cầu</Link></DropdownItem>  
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

export default ApplicationDropdown;
