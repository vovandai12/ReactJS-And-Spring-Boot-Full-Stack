import React, { Component } from "react";
import ViewUserComponent from "./ViewUserComponent";
import { Button, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import UserService from "../../../service/admin/UserService";

class UserListComponent extends Component {

    state = {
        show: false,
        loading: false,
        arr: []
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        UserService.findAll()
            .then(response => {
                this.setState({
                    arr: response && response.data && response.data.data ? response.data.data : [],
                    loading: false
                })
            })
    }

    onHide = () => {
        this.setState({ show: false })
    }

    handleDelete = (row) => {
        console.log("🚀 ~ file: row:", row.id)
        toast.error("handleDelete");
    }

    render() {

        const { show, arr, loading } = this.state;
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
            filter: textFilter(),
            formatter: (cell, row) => (
                <span>
                    {cell ? cell : <p className="text-danger">NoUpdate...</p>}
                </span>
            )
        }, {
            dataField: 'lastName',
            text: 'Last Name',
            sort: true,
            filter: textFilter(),
            formatter: (cell, row) => (
                <span>
                    {cell ? cell : <p className="text-danger">NoUpdate...</p>}
                </span>
            )
        }, {
            dataField: 'email',
            text: 'Email',
            sort: true,
            filter: textFilter()
        }, {
            dataField: 'role',
            text: 'Role',
            sort: true,
            formatter: (cell, row) => {
                if (row.role === 'ROLE_ADMIN') {
                    return (
                        <span> Admin</span>
                    );
                } else {
                    return (
                        <span> User</span>
                    );
                }
            }
        }, {
            dataField: 'avatar',
            text: 'Avatar',
            sort: true,
            formatter: (cell, row) => (
                <span>
                    {cell ? cell : <p className="text-danger">NoUpdate...</p>}
                </span>
            )
        }, {
            dataField: 'lastLoginDate',
            text: 'Last login',
            sort: true,
            formatter: (cell, row) => (
                <span>
                    {cell ? cell : <p className="text-danger">NoUpdate...</p>}
                </span>
            )
        }, {
            dataField: '',
            text: 'Action',
            formatter: (cell, row) => (
                <>
                    <Button variant="info"
                        onClick={() => this.setState({ show: true })}>View</Button>{' '}
                    <Button variant="warning">Edit</Button>{' '}
                    <Button variant="danger"
                        onClick={() => this.handleDelete(row)}>Delete</Button>
                </>
            )
        }];
        const defaultSorted = [{
            dataField: 'id',
            order: 'desc'
        }];

        if (loading) {
            return <Spinner animation="border" />;
        }

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

                <ViewUserComponent
                    show={show}
                    onHide={() => this.onHide()} />
            </>
        )
    }
}

export default UserListComponent;