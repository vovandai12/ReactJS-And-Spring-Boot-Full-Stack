import React, { Component } from "react";
import ViewUserComponent from "./ViewUserComponent";
import { Table, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import UserService from "../../../service/admin/UserService";

class UserListComponent extends Component {

    state = {
        show: false,
        arr: []
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.someProp !== this.props.someProp) {
            this.fetchData();
        }
    }

    fetchData = async () => {
        const response = await UserService.findAll();
        this.setState({
            arr: response && response.data && response.data.data ? response.data.data : []
        })
    };

    onHide = () => {
        this.setState({ show: false })
    }

    handleDelete = () => {
        toast.error("handleDelete");
    }

    render() {

        const { show, arr } = this.state;
        const columns = [{
            dataField: "id",
            hidden: true
        }, {
            dataField: 'userName',
            text: 'Username',
            sort: true,
            filter: textFilter()
        }, {
            dataField: 'firstName',
            text: 'First Name',
            sort: true,
            filter: textFilter()
        }, {
            dataField: 'lastName',
            text: 'Last Name',
            sort: true,
            filter: textFilter()
        }, {
            dataField: 'email',
            text: 'Email',
            sort: true,
            filter: textFilter()
        }, {
            dataField: 'role',
            text: 'Role',
            sort: true
        }, {
            dataField: 'avatar',
            text: 'Avatar',
            sort: true
        }, {
            dataField: 'lastLoginDate',
            text: 'Last login',
            sort: true
        }];
        const defaultSorted = [{
            dataField: 'id',
            order: 'desc'
        }];

        return (
            <>
                <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={arr}
                    columns={columns}
                    defaultSorted={defaultSorted}
                    pagination={paginationFactory()}
                    filter={filterFactory()}
                />

                {/* <Table striped bordered hover className="mt-3">
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
                    onHide={() => this.onHide()} /> */}
            </>
        )
    }
}

export default UserListComponent;