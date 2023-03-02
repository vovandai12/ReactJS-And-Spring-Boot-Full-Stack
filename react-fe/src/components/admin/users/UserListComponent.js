import React, { Component } from "react";
import ViewUserComponent from "./ViewUserComponent";
import { Table, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import UserService from "../../../service/admin/UserService";

class UserListComponent extends Component {

    state = {
        show: false,
        arr: []
    }

    async componentDidMount() {
        const response = await UserService.findAll();
        this.setState({
            arr: response.data.data
        })
    }

    onHide = () => {
        this.setState({ show: false })
    }

    handleDelete = () => {
        toast.error("handleDelete");
    }

    render() {

        const { show, arr } = this.state;

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
                            <th>Role</th>
                            <th>Avatar</th>
                            <th>Last login</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr && arr.length > 0 &&
                            arr.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.userName}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.role}</td>
                                        <td>{item.avatar}</td>
                                        <td>{item.lastLoginDate}</td>
                                        <td>
                                            <Button variant="info"
                                                onClick={() => this.setState({ show: true })}>View</Button>{' '}
                                            <Button variant="warning">Edit</Button>{' '}
                                            <Button variant="danger"
                                                onClick={() => this.handleDelete()}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
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