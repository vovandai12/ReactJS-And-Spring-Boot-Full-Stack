import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { authenticateAction, authFailureAction } from '../../../store/ActionReducer';
import AuthService from "../../../service/admin/AuthService";
import { TOKEN } from '../../../common/AuthToken';

class NavbarComponent extends Component {

    state = {
        redirect: false,
        username: ''
    }

    handleLogout = () => {
        this.props.authenticate();
        this.props.authFailure('');
        toast.success("Signed out successfully");
        this.setState({
            redirect: true
        })
    }

    componentDidMount() {
        if (TOKEN === '') {
            this.setState({
                redirect: true
            })
        } else {
            AuthService.getUsername(TOKEN).then(response => {
                this.setState({
                    username: response.data.username
                })
            })
        }
    }

    render() {

        const { redirect, username } = this.state;
        if (redirect) {
            this.setState({
                redirect: false
            })
            return <Navigate to="/login" />;
        }

        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand as={NavLink} to="">Admin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={NavLink} to="">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/users">User</Nav.Link>
                            <Nav.Link href="">Category</Nav.Link>
                            <Nav.Link href="">Product</Nav.Link>
                            <Nav.Link href="">Invoice</Nav.Link>
                            <Nav.Link href="">Order</Nav.Link>
                            <NavDropdown title={username === '' ? 'Account' : username} id="basic-nav-dropdown">
                                {username === '' ?
                                    <>
                                        <NavDropdown.Item as={NavLink} to="/login">Login</NavDropdown.Item>
                                        <NavDropdown.Item as={NavLink} to="/register">Register</NavDropdown.Item>
                                    </>
                                    :
                                    <>
                                        <NavDropdown.Item as={NavLink} to="/change-information">Change information</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={() => this.handleLogout()}>Logout</NavDropdown.Item>
                                    </>
                                }
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: () => dispatch(authenticateAction()),
        authFailure: (error) => dispatch(authFailureAction(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);