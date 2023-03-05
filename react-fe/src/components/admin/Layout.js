import React, { Component } from "react";
import NavbarComponent from "./fragments/NavbarComponent";
import FooterComponent from "./fragments/FooterComponent";
import { Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Layout extends Component {
    render() {
        return (
            <>
                <Container fluid="lg">

                    <NavbarComponent />

                    <Container>
                        <Outlet />
                    </Container>

                    <FooterComponent />

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