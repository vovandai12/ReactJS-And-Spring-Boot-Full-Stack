import React, { Component } from "react";
import NavbarComponent from "./fragments/NavbarComponent";
import { Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';

class Layout extends Component {
    render() {
        return (
            <>
                <Container>

                    <NavbarComponent />

                    <Container fluid>
                        <Outlet />
                    </Container>

                </Container>
            </>
        )
    }
}

export default Layout;

//<Link to="/product">Dashboard</Link>