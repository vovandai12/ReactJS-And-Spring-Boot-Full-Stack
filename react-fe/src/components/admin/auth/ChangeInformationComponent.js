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
        file: {},
        imgSrc: '',
        validated: false,
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleChangeImgSrc = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            this.setState({
                file: event.target.files[0],
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
                                            name="firstName"
                                            onChange={(event) => this.handleChange(event)}
                                            required />
                                        <Form.Control.Feedback type="invalid">Please enter a first name.</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="lastName">
                                        <Form.Label>Last name:</Form.Label>
                                        <Form.Control type="text" placeholder="Enter last name"
                                            value={this.state.lastName}
                                            name="lastName"
                                            onChange={(event) => this.handleChange(event)}
                                            required />
                                        <Form.Control.Feedback type="invalid">Please enter a last name.</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="address">
                                        <Form.Label>Address:</Form.Label>
                                        <Form.Control type="text" placeholder="Enter address"
                                            value={this.state.address}
                                            name="address"
                                            onChange={(event) => this.handleChange(event)}
                                            required />
                                        <Form.Control.Feedback type="invalid">Please enter a address.</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="birthDay">
                                        <Form.Label>Birth day:</Form.Label>
                                        <Form.Control type="date" placeholder="Enter birthDay"
                                            value={this.state.birthDay}
                                            name="birthDay"
                                            onChange={(event) => this.handleChange(event)}
                                            required />
                                        <Form.Control.Feedback type="invalid">Please enter a birthDay.</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="gender">
                                        <Form.Label>Gender:</Form.Label>
                                        <div key="inline">
                                            <Form.Check inline label="Male" name="gender" type="radio" id="inline1" value="true"
                                                onChange={(event) => this.handleChange(event)} />
                                            <Form.Check inline label="Female" name="gender" type="radio" id="inline2" value="false"
                                                onChange={(event) => this.handleChange(event)} />
                                        </div>
                                    </Form.Group>

                                    <div className="form-group">
                                        <label>Avatar:</label>
                                        <input type="file" className="form-control-file" id="imgSrc"
                                            onChange={(event) => this.handleChangeImgSrc(event)} />
                                    </div>
                                    {imgSrc !== '' &&
                                        (
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src={imgSrc} alt="avatar" />
                                            </Card>
                                        )
                                    }
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