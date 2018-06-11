import React, {Component} from 'react';
import {Table} from 'reactstrap';
import DeleteWageGroup from './DeleteWageGroup';
import EditWageGroup from './EditWageGroup';
import WageGroup from './WageGroup';
import { getWageGroup } from '../../redux/actions/WageGroup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const WageGroupList = ({wageGroups}) => (
      <div>
          <h5 className="text-blayn">Nhóm mức lương</h5>
          <hr/>
          <Table bordered hover responsive>
            <thead>
                <tr>
                <th>id</th>
                <th>Tên nhóm mức lương</th>
                <th>Mức lương (VNĐ/ 1h)</th>
                <th>Ngày bắt đầu</th>
                <th>Sửa</th>
                <th>Xóa</th>
                </tr>
            </thead>
            <tbody>
            {wageGroups.map(wageGroup =>
              <WageGroup
                key={wageGroup.id}
                wageGroup={wageGroup}
              />
            )}
            </tbody>
          </Table>    
      </div>
    )

export default WageGroupList;