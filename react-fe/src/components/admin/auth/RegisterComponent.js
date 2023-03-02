import React, { Component } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';

class RegisterComponent extends Component {

    render() {
        return (
            <>
                <Row className="mt-3">
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username:</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </>
        )
    }
}

export default RegisterComponent;