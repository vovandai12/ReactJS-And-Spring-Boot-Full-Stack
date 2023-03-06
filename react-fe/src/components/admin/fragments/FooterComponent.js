import React, { Component } from "react";
import { Card, ListGroup } from 'react-bootstrap';
import { AUTH_TOKEN } from '../../../common/AuthToken';

class FooterComponent extends Component {

    render() {

        return (
            <>
                <Card className="mt-3">
                    <ListGroup variant="flush">
                        <ListGroup.Item>localStorage: {localStorage.getItem(AUTH_TOKEN)}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </>
        )
    }
}

export default FooterComponent;