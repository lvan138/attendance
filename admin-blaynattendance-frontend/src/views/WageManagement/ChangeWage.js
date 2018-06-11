import React, {Component} from 'react';
import {Table, Form, Col, Row, FormGroup, Label, Input, Button} from 'reactstrap';

class ChangeWage extends Component {
    render() {
        return (
            <div className="bg-light">
                <br/>
                <h5 className="text-blayn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thêm nhóm mức lương</h5>
                <Form className="add-position">
                    <Row>
                        <Col xs="12">
                            <FormGroup>
                                <Label htmlFor="name">Tên nhóm mức lương</Label> <span className="required">*</span>
                                <Row>
                                    <Col xs="12" sm="6">
                                        <Input type="select" name="select" id="select">
                                            <option value="1">Nhóm 1</option>
                                            <option value="2">Nhóm 2</option>
                                            <option value="3">Nhóm 3</option>
                                        </Input>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                        <FormGroup>
                            <Label htmlFor="name">Mức lương (VNĐ/1h)</Label> <span className="required">*</span>
                            <Row>
                            <Col xs="12" sm="6">
                            <Input type="text" id="salary" placeholder="Nhập mức lương" required/>
                            </Col>
                            </Row>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                        <FormGroup>
                            <Label htmlFor="name">Ngày bắt đầu</Label> <span className="required">*</span>
                            <Row>
                            <Col xs="12" sm="6">
                            <Input type="date" id="start-date" placeholder="Nhập ngày bắt đâu mức lương" required/>
                            </Col>
                            </Row>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button type="submit"  color="primary">Add</Button>
                    <Button color="secondary">Cancel</Button>
                </Form>              
            </div>
        )
    }
}
export default ChangeWage;