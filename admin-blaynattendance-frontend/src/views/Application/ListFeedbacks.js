import React, {Component} from 'react'
import {Table} from 'reactstrap'
import { formatDate } from '../../helper/formatDate'

export default class ListFeedbacks extends Component{
    render(){
        const { feedback } = this.props
        return(
            <div>
                <h5 className="text-blayn">Danh sách đơn phản hồi</h5>
                <hr/>
                <Table bordered hover responsive>
                      <thead  className="bg-info">
                          <tr>
                              <th>STT</th>
                              <th>Tên nhân viên</th>
                              <th>Tiêu đề</th>
                              <th>Nội dung</th>
                              <th>Ngày tạo</th>
                          </tr>
                      </thead>
                      <tbody>
                          {feedback.map(
                              item => (
                                <tr>
                                    <td>{feedback.indexOf(item) + 1}</td>
                                    <td>{item.user}</td>
                                    <td>{item.title}</td>
                                    <td>{item.content}</td>
                                    <td>{item.created_at ? formatDate(item.created_at.split(' ')[0]) : ''}</td>
                                </tr>
                            )
                        )}
                      </tbody>
                </Table>

            </div>
        )
    }
}