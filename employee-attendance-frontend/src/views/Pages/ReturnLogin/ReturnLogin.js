import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';


export default class ReturnLogin extends Component {
  render() {
    return (
      <div className="app-login flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="5">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1 className="text-center">BLAYN</h1>
                    <p className="text-muted">Hãy kiểm tra hòm thư có một email chứa mật khẩu đã gửi tới hòm thư của bạn</p>
                    <Row>
                      <Col xs="12" className="text-center" >
                        <Button color="primary" className="px-4">Quay lại để đăng nhập</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

