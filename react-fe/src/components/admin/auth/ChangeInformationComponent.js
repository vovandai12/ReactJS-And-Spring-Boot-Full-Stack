import React, { Component } from "react";
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import AuthService from "../../../service/admin/AuthService";

class ChangeInformationComponent extends Component {

    state = {
        firstName: '',
        lastName: '',
        address: '',
        birthDay: '',
        gender: '',
        file: '',
        imgSrc: '',
        validated: false,
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    };

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    };

    handleChangeAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    };

    handleChangeBirthDay = (event) => {
        this.setState({
            birthDay: event.target.value
        })
    };

    handleChangeGender = (event) => {
        this.setState({
            gender: event.target.checked
        })
    };

    handleChangeImgSrc = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            this.setState({
                imgSrc: URL.createObjectURL(event.target.files[0])
            })
        }
    };

    onSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            const data = {

            }
            AuthService.changeInformation(data)
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

        const { validated, imgSrc } = this.state;

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
                                <Card.Header>Change Information</Card.Header>
                                <Card.Body>
                                    <Form.Group controlId="firstName">
                                        <Form.Label>First name:</Form.Label>
                                        <Form.Control type="text" placeholder="Enter first name"
                                            value={this.state.firstName}
                                            onChange={(event) => this.handleChangeFirstName(event)}
                                            required />
                                        <Form.Control.Feedback type="invalid">Please enter a first name.</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="lastName">
                                        <Form.Label>Last name:</Form.Label>
                                        <Form.Control type="text" placeholder="Enter last name"
                                            value={this.state.lastName}
                                            onChange={(event) => this.handleChangeLastName(event)}
                                            required />
                                        <Form.Control.Feedback type="invalid">Please enter a last name.</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="address">
                                        <Form.Label>Address:</Form.Label>
                                        <Form.Control type="text" placeholder="Enter address"
                                            value={this.state.address}
                                            onChange={(event) => this.handleChangeAddress(event)}
                                            required />
                                        <Form.Control.Feedback type="invalid">Please enter a address.</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="birthDay">
                                        <Form.Label>Birth day:</Form.Label>
                                        <Form.Control type="text" placeholder="Enter birthDay"
                                            value={this.state.birthDay}
                                            onChange={(event) => this.handleChangeBirthDay(event)}
                                            required />
                                        <Form.Control.Feedback type="invalid">Please enter a birthDay.</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="gender">
                                        <Form.Label>Gender:</Form.Label>
                                        <div onChange={(event) => this.handleChangeGender(event)}>
                                            <Form.Check inline label="Male" name="gender" type="radio" id="inline1" checked value="true" />
                                            <Form.Check inline label="Female" name="gender" type="radio" id="inline2" value="false" />
                                        </div>
                                    </Form.Group>

                                    {/* <Form.Group controlId="imgSrc">
                                <Form.Label>Avatar:</Form.Label>
                                <Form.File id="imgSrc" onChange={(event) => this.handleChangeImgSrc(event)} />
                            </Form.Group> */}
                                    {/* <Form.Group>
                                <Form.File id="imgSrc" label="Example file input" onChange={(event) => this.handleChangeImgSrc(event)} />
                            </Form.Group>
                            {imgSrc !== '' &&
                                (
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={imgSrc} alt="avatar" />
                                    </Card>
                                )
                            } */}
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

export default ChangeInformationComponent;