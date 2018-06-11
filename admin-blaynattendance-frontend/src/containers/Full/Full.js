import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';

import Positions from '../../views/StaffManagement/Positions/';
import AddPositions from '../../views/StaffManagement/AddPositions/AddPositons';
import EditPositions from '../../views/StaffManagement/EditPositons/EditPositons';

import Employees from '../../views/StaffManagement/Employees/';
import AddEmployees from '../../views/StaffManagement/AddEmployees/';
import EditEmployees from '../../views/StaffManagement/EditEmployees/EditEmployees';

import ShowShift from '../../views/ShiftManagement/Shift/ShowShift/ShowShift';
import AddShift from '../../views/ShiftManagement/Shift/AddShift/AddShift';
import EditShift from '../../views/ShiftManagement/Shift/EditShift/EditShift';

import ShowShiftCalendar from '../../views/ShiftManagement/ShiftCalendar/ShowShiftCalendar/ShowShiftCalendar';
import XepCa from '../../views/ShiftManagement/ShiftCalendar/ShowShiftCalendar/XepCa';
import ShiftOfStaff from '../../views/ShiftManagement/ShiftCalendar/ShowShiftCalendar/ShiftOfStaff';

import Profile from '../../views/Profile/Profile';
import Logout from '../../views/Profile/Logout';
import ChangePassword from '../../views/Profile/ChangePassword';

import Notification from '../../views/Notification/Notification';

import Wage from '../../views/WageManagement/Wage';

import Attendance from '../../views/Attendance/Attendance';
import ChamCongVao from '../../views/Attendance/ChamCongVao';

//hien thi bang luong cua toan nhan vien trong cua hang
import Payrol from '../../views/Payrol/Payrol';
import BangLuongCuaNhanVien from '../../views/Payrol/BangLuongCuaNhanVien';

//quan ly don
import Application from '../../views/Application/Application';
import PheDuyetDXCC from '../../views/Application/PheDuyetDXCC';
import PheDuyetDXNC from '../../views/Application/PheDuyetDXNC';
import PheDuyetDXNV from '../../views/Application/PheDuyetDXNV';
import PheDuyetDXUL from '../../views/Application/PheDuyetDXUL';
//quản lý tin nhắn

import Message from '../../views/Message/Message';

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

                <Route path="/positions" name="Positions" component={Positions}/>
                <Route path="/add-positions" name="Add Positions" component={AddPositions}/>
                <Route path="/edit-positions" name="Edit Positions" component={EditPositions}/>

                <Route path="/employees" name="Employees" component={Employees}/>
                <Route path="/add-employees" name="Add Employees" component={AddEmployees}/>
                <Route path="/edit-employees/:userId" name="Edit Employees" component={EditEmployees}/>

                <Route path="/show-shift" name="Show Shift" component={ShowShift}/>

                <Route path="/show-shift-calendar" name="Show Shift Calendar" component={ShowShiftCalendar}/>
                <Route path="/xep-ca/:shiftId" name="Xep Ca" component={XepCa}/>
                <Route path="/shift-of-staff" name="Shift Of Staff" component={ShiftOfStaff}/>

                <Route path="/profile" name="Profile" component={Profile}/>
                <Route path="/logout" name="Logout" component={Logout}/>
                <Route path="/change-password" name="Chang Logout" component={ChangePassword}/>

                <Route path="/wage" name="Wage" component={Wage}/>

                <Route path="/notification" name="Notification" component={Notification}/>

                <Route path="/cham-cong" name="ChamCong" component={Attendance}/>
                <Route path="/cham-cong-vao" name="ChamCongVao" component={ChamCongVao}/>

                <Route path="/payroll" name="Payroll" component={Payrol}/>
                <Route path="/bang-luong-cua-nhan-vien/:userId" name="BangLuongCuaNhanVien" component={BangLuongCuaNhanVien}/>

                <Route path="/application" name="Application" component={Application}/>
                <Route path="/phe-duyet-dxcc" name="PheDuyetDXCC" component={PheDuyetDXCC}/>
                <Route path="/phe-duyet-dxnc" name="PheDuyetDXNC" component={PheDuyetDXNC}/>
                <Route path="/phe-duyet-dxnv" name="PheDuyetDXNV" component={PheDuyetDXNV}/>
                <Route path="/phe-duyet-dxul" name="PheDuyetDXUL" component={PheDuyetDXUL}/>

                <Route path="/message" name="Message" component={Message}/>

                <Redirect from="/" to="/cham-cong"/>
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
