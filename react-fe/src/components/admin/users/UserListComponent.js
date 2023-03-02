import React, { Component } from "react";
import ViewUserComponent from "./ViewUserComponent";
import { Table, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

class UserListComponent extends Component {

    state = {
        show: false
    }

    onHide = () => {
        this.setState({ show: false })
    }

    handleDelete = () => {
        toast.error("handleDelete");
    }

    render() {

        const { show } = this.state;

        return (
            <>
                <Table striped bordered hover className="mt-3">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Avatar</th>
                            <th>Last login</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>User name 1</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>example@.domain</td>
                            <td>Avatar</td>
                            <td>01/03/2023</td>
                            <td>
                                <Button variant="info"
                                    onClick={() => this.setState({ show: true })}>View</Button>{' '}
                                <Button variant="warning">Edit</Button>{' '}
                                <Button variant="danger"
                                    onClick={() => this.handleDelete()}>Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <ViewUserComponent
                    show={show}
                    onHide={() => this.onHide()} />
            </>
        )
    }
}

export default UserListComponent;