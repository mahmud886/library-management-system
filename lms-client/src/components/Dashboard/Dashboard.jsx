import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Placeholder,
    Button,
} from 'react-bootstrap';

const Dashboard = () => {
    return (
        <Container>
            <div className='d-flex justify-content-center align-items-center'>
                <Row>
                    <Col className='pt-3'>
                        <Card style={{ width: '18rem' }} className='bg-primary'>
                            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
                            <Card.Body variant='danger'>
                                <Placeholder as={Card.Title} animation='glow'>
                                    Total Members
                                </Placeholder>
                                <Placeholder as={Card.Text} animation='glow'>
                                    <h1>500</h1>
                                </Placeholder>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='pt-3'>
                        <Card
                            style={{ width: '18rem' }}
                            className='bg-secondary'>
                            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
                            <Card.Body>
                                <Placeholder as={Card.Title} animation='glow'>
                                    Total Books
                                </Placeholder>
                                <Placeholder as={Card.Text} animation='glow'>
                                    <h1>3000</h1>
                                </Placeholder>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='pt-3'>
                        <Card style={{ width: '18rem' }} className='bg-success'>
                            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
                            <Card.Body>
                                <Placeholder as={Card.Title} animation='glow'>
                                    Total Authors
                                </Placeholder>
                                <Placeholder as={Card.Text} animation='glow'>
                                    <h1>540</h1>
                                </Placeholder>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='pt-3'>
                        <Card style={{ width: '18rem' }} className='bg-danger'>
                            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
                            <Card.Body>
                                <Placeholder as={Card.Title} animation='glow'>
                                    Total Categories
                                </Placeholder>
                                <Placeholder as={Card.Text} animation='glow'>
                                    <h1>20</h1>
                                </Placeholder>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='pt-3'>
                        <Card style={{ width: '18rem' }} className='bg-warning'>
                            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
                            <Card.Body>
                                <Placeholder as={Card.Title} animation='glow'>
                                    Total Publishers
                                </Placeholder>
                                <Placeholder as={Card.Text} animation='glow'>
                                    <h1>300</h1>
                                </Placeholder>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='pt-3'>
                        <Card style={{ width: '18rem' }} className='bg-info'>
                            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
                            <Card.Body>
                                <Placeholder as={Card.Title} animation='glow'>
                                    Total Issue Books
                                </Placeholder>
                                <Placeholder as={Card.Text} animation='glow'>
                                    <h1>23</h1>
                                </Placeholder>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='pt-3'>
                        <Card style={{ width: '18rem' }} className='bg-light'>
                            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
                            <Card.Body>
                                <Placeholder as={Card.Title} animation='glow'>
                                    Total Return Books
                                </Placeholder>
                                <Placeholder as={Card.Text} animation='glow'>
                                    <h1>213</h1>
                                </Placeholder>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='pt-3'>
                        <Card
                            style={{ width: '18rem' }}
                            className='bg-dark text-light'>
                            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
                            <Card.Body>
                                <Placeholder as={Card.Title} animation='glow'>
                                    Total New Members
                                </Placeholder>
                                <Placeholder as={Card.Text} animation='glow'>
                                    <h1>2000</h1>
                                </Placeholder>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Dashboard;
