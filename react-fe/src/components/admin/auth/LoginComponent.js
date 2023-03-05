import React, { Component } from "react";
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import AuthService from "../../../service/admin/AuthService";
import { connect } from 'react-redux';

class LoginComponent extends Component {

    state = {
        username: '',
        password: '',
        validated: false
    };

    handleChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    };

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    };

    onSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            this.props.authenticate();
            const data = {
                userName: this.state.username,
                password: this.state.password
            }
            AuthService.login(data)
                .then(response => {
                    toast.success(response.data.message);
                    console.log("🚀 ~ file: ~ response:", response)
                    this.props.authSuccess(response.data);
                    this.props.history.push('');
                })
                .catch(error => {
                    if (error && error.response) {
                        switch (error.response.status) {
                            case 401:
                                this.props.authFailure("Authentication Failed.Bad Credentials");
                                break;
                            default:
                                this.props.authFailure("Authentication Failed.Bad Credentials");
                        }
                    }
                    else {
                        this.props.authFailure("Authentication Failed.Bad Credentials");
                    }
                    this.props.authFailure("Authentication Failed.Bad Credentials");
                    toast.error("Authentication Failed.Bad Credentials");
                    this.setState({
                        username: '',
                        password: ''
                    })
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
                                <Card.Header>Login</Card.Header>
                                <Card.Body>
                                    <Form.Group controlId="username">
                                        <Form.Label>Username:</Form.Label>
                                        <Form.Control type="text" placeholder="Enter username"
                                            value={this.state.username}
                                            onChange={(event) => this.handleChangeUsername(event)}
                                            required />
                                        <Form.Control.Feedback type="invalid">Please enter a username.</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter password"
                                            value={this.state.password}
                                            onChange={(event) => this.handleChangePassword(event)}
                                            required />
                                        <Form.Control.Feedback type="invalid">Please enter a password.</Form.Control.Feedback>
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

const mapStateToProps = (state) => {
    return {
        user: state.user,
        error: state.error,
        isAuthenticated: state.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: () => dispatch({
            type: 'AUTH_REQUEST'
        }),
        authSuccess: ({ data }) => dispatch({
            type: 'AUTH_SUCCESS',
            payload: data,
        }),
        authFailure: (error) => dispatch({
            type: 'AUTH_FAILURE',
            payload: error,
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);