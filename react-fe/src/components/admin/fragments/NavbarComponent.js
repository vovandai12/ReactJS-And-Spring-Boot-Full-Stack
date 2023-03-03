import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class NavbarComponent extends Component {
    render() {
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
                            <NavDropdown title="Account" id="basic-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to="/login">Login</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/register">Register</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/change-information">Change information</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}

export default NavbarComponent;