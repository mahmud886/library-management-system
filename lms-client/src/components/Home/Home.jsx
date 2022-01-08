import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Home = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={2} variant='success'>
                        <div>
                            <h2>Sidebar</h2>
                        </div>
                    </Col>
                    <Col xs={10}>Body</Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;
