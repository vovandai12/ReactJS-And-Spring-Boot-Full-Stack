import React, { Component } from "react";
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import AuthService from "../../../service/admin/AuthService";

class RegisterComponent extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        agree: false,
        validated: false,
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleChangeAgree = (event) => {
        this.setState({
            agree: event.target.checked
        })
    };

    onSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            const data = {
                userName: this.state.username,
                email: this.state.email,
                password: this.state.password
            }
            AuthService.register(data)
                .then(function (response) {
                    toast.success(response.message);
                })
                .catch(function (error) {
                    toast.error(error);
                })
        }
        this.setState({
            validated: true
        })
    }

    render() {

        const { validated } = this.state;

        // if (this.state.redirect) {
        //     return <Navigate to="/todo" />;
        // }
        // import { BrowserRouter, Routes, Route } from "react-router-dom";

        return (
            <>
                <Row className="mt-3">
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form noValidate validated={validated} onSubmit={(event) => this.onSubmit(event)}>
                            <Card>
                                <Card.Header>Register</Card.Header>
                                <Card.Body>
                                    <Form.Group controlId="username">
                                        <Form.Label>Username:</Form.Label>
                                        <Form.Control type="text" placeholder="Enter username"
                                            value={this.state.username}
                                            name="username"
                                            onChange={(event) => this.handleChange(event)}
                                            required />
                                        <Form.Control.Feedback type="invalid">Please enter a username.</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email"
                                            value={this.state.email}
                                            name="email"
                                            onChange={(event) => this.handleChange(event)}
                                            required />
                                        <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter password"
                                            value={this.state.password}
                                            name="password"
                                            onChange={(event) => this.handleChange(event)}
                                            required />
                                        <Form.Control.Feedback type="invalid">Please enter a password.</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="agree">
                                        <Form.Check type="checkbox" label="I agree to the terms and conditions"
                                            checked={this.state.agree}
                                            onChange={(event) => this.handleChangeAgree(event)}
                                            required />
                                        <Form.Control.Feedback type="invalid">Please agree to the terms and conditions.</Form.Control.Feedback>
                                    </Form.Group>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Form>
                    </Col>
                </Row>
            </>
        )
    }
}

export default RegisterComponent;