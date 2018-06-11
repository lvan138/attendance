import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody, Button,
  Form,FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';


export default class ForgotPassword extends Component {
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
                    <p className="text-muted">Vui lòng nhập email để lấy lại mật khẩu.</p>
                    {/* <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-envelope-o"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email"/>
                    </InputGroup>
                    <Row>
                      <Col xs="12" className="text-center">
                        <Button color="primary" className="px-4">Gửi</Button>
                      </Col>
                    </Row> */}
                     <Form action="" method="post">
                      <FormGroup>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="fa fa-envelope"></i></InputGroupText>
                          </InputGroupAddon>
                          <Input type="email" id="email" name="email" placeholder="Email"/>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="form-actions">
                        <Row>
                        <Col xs="12" className="text-center">
                        <Button type="submit"  color="primary" className="px-4">Gửi</Button>
                        </Col>
                        </Row>
                      </FormGroup>
                    </Form>
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
// export default ForgotPassword;
