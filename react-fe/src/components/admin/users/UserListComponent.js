import React, { Component } from "react";
import { Table, Button } from 'react-bootstrap';

class UserListComponent extends Component {
    render() {
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
                                <Button variant="info">View</Button>{' '}
                                <Button variant="warning">Edit</Button>{' '}
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </>
        )
    }
}

export default UserListComponent;