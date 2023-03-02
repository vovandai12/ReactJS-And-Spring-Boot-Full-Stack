import React, { Component } from "react";
import NavbarComponent from "./fragments/NavbarComponent";
import { Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Layout extends Component {
    render() {
        return (
            <>
                <Container>

                    <NavbarComponent />

                    <Container fluid>
                        <Outlet />
                    </Container>

                    <ToastContainer
                        position="bottom-center"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />

                </Container>
            </>
        )
    }
}

export default Layout;

//<Link to="/product">Dashboard</Link>