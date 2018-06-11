import React, {Component} from 'react';
import DeleteWageGroup from './DeleteWageGroup';
import EditWageGroup from './EditWageGroup';
import * as actions from '../../redux/actions/WageGroup';

const WageGroup = ({wageGroup}) => (
    <tr>
        <th>{wageGroup.id}</th>
        <td>{wageGroup.name}</td>
        <td>{wageGroup.wage === null ? '' : wageGroup.wage.salary}</td>
        <td>{wageGroup.wage  ? wageGroup.wage.start_date : ''}</td>
        <td><div className="button-edit"><EditWageGroup wageGroup={wageGroup}/></div></td>
        <td><div className="button-edit"><DeleteWageGroup id={wageGroup.id}/></div></td>
    </tr>
)

export default WageGroup;
