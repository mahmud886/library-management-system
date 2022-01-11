import React, {useEffect, useState} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Placeholder,
    Button,
} from 'react-bootstrap';
import axios from "axios";
import {apiEndpoint} from "../../App";

const Dashboard = () => {

    const [allBooks, setAllBooks] = useState([]);
    const [allMembers, setAllMembers] = useState([]);

    // get all books
    useEffect(() => {
        axios
            .get(`${apiEndpoint}/books`)
            .then((response) => setAllBooks(response.data));

    });




    // get all members
    useEffect(() => {
        axios
            .get(`${apiEndpoint}/members`)
            .then((response) => setAllMembers(response.data));

    });

    return (
        <Container>
            <div className='d-flex justify-content-center align-items-center py-3'>
                <Row>
                    <Col className='pt-3'>
                        <Card style={{ width: '18rem' }} className='nav__background text-white'>
                            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
                            <Card.Body variant='danger' className=''>
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
                            className='nav__background text-white'>
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
                        <Card style={{ width: '18rem' }} className='nav__background text-white'>
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
                        <Card style={{ width: '18rem' }} className='nav__background text-white'>
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
                        <Card style={{ width: '18rem' }} className='nav__background text-white'>
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
                        <Card style={{ width: '18rem' }} className='nav__background text-white'>
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
                        <Card style={{ width: '18rem' }} className='nav__background text-white'>
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
                            className='nav__background text-white'>
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

            {/*All Book Is Here*/}
            <hr className='text-white-50'/>
            <div className='d-flex justify-content-end'>
                <div className='text-white-50'>
                    <h5>Library Members</h5>
                </div>
            </div>
            <div className='py-3 nav__background rounded shadow-sm '>
                <Row>
                    {allBooks.map((book, index) => (
                        <Col md={3} className='pt-3' key={index}>
                            <Card
                                style={{ width: '18rem' }}
                                className='m-auto nav__background rounded-3 shadow-sm'>
                                <Card.Img
                                    variant='top'
                                    src='https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80'
                                />
                                <Card.Body variant='danger'>
                                    <Placeholder
                                        className='text-white-50'
                                        as={Card.text}
                                        animation='glow'>
                                        <div className='d-grid gap-2 py-2'>
                                            <Button
                                                className='rounded-pill '
                                                size='lg'
                                                variant={'outline-dark text-white-50'}>
                                                {book.book_name}
                                            </Button>
                                        </div>
                                        <p>Book ID:{book.book_id}</p>
                                        <p>Author: {book.authors} </p>
                                        <p>Stock: {book.stock} </p>
                                        <p>{book.description} </p>
                                    </Placeholder>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

        {/*    All Members are Here*/}
            <hr className='text-white-50'/>
            <div className='d-flex justify-content-end pt-2'>
                <div className='text-white-50'>
                    <h5>Library Book</h5>
                </div>
            </div>

            <div className=' text-white rounded shadow-sm '>
                <Row>
                    {allMembers.map((member, index) => (
                        <Col md={3} className='pt-3' key={index}>
                            <Card
                                style={{ width: '18rem' }}
                                className='m-auto nav__background rounded-3 shadow-sm'>
                                <Card.Img

                                    height='150px'
                                    width='150px'
                                    variant='top'
                                    src='https://gravatar.com/avatar/b61783cc329cdeb0612a23809fc0aa92?s=400&d=robohash&r=x'
                                />
                                <Card.Body variant='danger'>
                                    <Placeholder
                                        className='text-white-50'
                                        as={Card.text}
                                        animation='glow'>
                                        <div className='d-grid gap-2 py-2'>
                                            <Button
                                                className='rounded-pill '
                                                size='lg'
                                                variant={'outline-dark text-white-50'}>
                                                {member.member_name}
                                            </Button>
                                        </div>

                                        <p>member ID: {member.member_id}</p>
                                        <p>Email: {member.member_email} </p>
                                        <p>Phone: {member.member_phone} </p>
                                        <p>{member.member_address} </p>
                                    </Placeholder>
                                    <div className='d-grid gap-2 py-2'>
                                        <Button className='rounded-pill text-white-50' size='lg' variant={'outline-dark'}>
                                            View Details
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
};

export default Dashboard;
