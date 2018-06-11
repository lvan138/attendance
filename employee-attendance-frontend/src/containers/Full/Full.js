import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';

import Profile from '../../views/Profile/Profile';
import Logout from '../../views/Profile/Logout';
import ChangePassword from '../../views/Profile/ChangePassword';

import ShowShift from '../../views/Shift/ShowShift';
import ShiftChange from '../../views/Shift/ShiftChange';

import Notification from '../../views/Notification/Notification';

import CreateApplication from '../../views/Application/CreateApplication';
import ListApplication from '../../views/Application/ListApplication';

import Payrol from '../../views/Payrol/Payrol'
import DonUngLuong from '../../views/Payrol/DonUngLuong'
import ShowMucLuong from '../../views/Payrol/ShowMucLuong'

import draft from '../../views/Shift/draft'
import Detail from '../../views/Payrol/Detail'

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header /> 
        <div className="app-body">
          <main className="main">
            {/* <Container fluid> */}
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>

                <Route path="/profile" name="Profile" component={Profile}/>
                <Route path="/logout" name="Logout" component={Logout}/>
                <Route path="/change-password" name="Chang Logout" component={ChangePassword}/>
                <Route path="/notification" name="Notification" component={Notification}/>

                <Route path="/show-shift" name="Show Shift" component={ShowShift}/>
                <Route path="/shift-change/:shiftId" name="Shift Change" component={ShiftChange}/>
                
                <Route path="/create-application" name="Create Application" component={CreateApplication}/>
                <Route path="/list-application" name="List Application" component={ListApplication}/>

                <Route path="/payrol" name="Payrol" component={Payrol}/>
                <Route path="/don-ung-luong" name="Don Ung Luong" component={DonUngLuong}/>
                <Route path="/show-muc-luong" name="Show Muc Luong" component={ShowMucLuong}/>
                <Route path="/detail/:id" name="Detail" component={Detail}/>

                <Route path="/draft" name="draft" component={draft}/>

                <Redirect from="/" to="/show-shift"/>
              </Switch>
            {/* </Container> */}
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
