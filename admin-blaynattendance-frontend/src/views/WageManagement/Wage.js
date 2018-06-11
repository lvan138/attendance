import React, {Component} from 'react';
import {
Nav, NavItem, NavLink, TabContent, TabPane, Form, Row, Col, FormGroup, Label, Input, Button
} from 'reactstrap';
import classnames from 'classnames';
import WageGroupList from './WageGroupList';
import AddWageGroup from './AddWageGroup';
import StoryWage from './StoryWage';
import ChangeWage from './ChangeWage';
import * as apis from '../../api';
import wageGroups from '../../redux/reducers/wageGroups';
import {getWageGroup} from '../../redux/actions/WageGroup';
import { connect } from 'react-redux';
 
class Wage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      wageGroups: []
    };
  }

  componentDidMount() {
    this.props.dispatch(getWageGroup());
    apis.getData('/wage-groups')
      .then(value => value.wageGroups)
      .then(wageGroups => this.setState({wageGroups}))
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs className="bg-light">
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}onClick={() => { this.toggle('1'); }}>
            <div className="text-blayn"><strong>Quản lý nhóm mức lương</strong></div>   
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}onClick={() => { this.toggle('2'); }}>
            <div className="text-blayn"><strong>Lịch sử thay đổi mức lương</strong></div>   
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="border-bottom-0">
          <TabPane tabId="1">
            <WageGroupList wageGroups={this.props.wageGroups}/>
            <br />
            <AddWageGroup />           
          </TabPane>
          <TabPane tabId="2">
            <StoryWage/>
            {/* <br/>
            <ChangeWage/> */}
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  wageGroups: state.wageGroups
})
export default connect(mapStateToProps)(Wage)