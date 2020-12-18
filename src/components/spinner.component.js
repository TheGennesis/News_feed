import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = ({ sentence }) => {

    return (

        <Container className="my-5 config-container">
            <Row className="my-5 justify-content-center">
                <Col md="2">
                    <h3>{sentence}</h3>
                </Col>
                <Col md="2">
                    <Spinner className="mx-5" animation="border" size="lg" variant="white" role="status" aria-hidden="true"/>
                </Col> 
            </Row>
        </Container>
    );
}

export default LoadingSpinner;