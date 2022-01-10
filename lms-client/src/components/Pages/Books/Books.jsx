import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Button,Row, Card, Col, Container, Nav, Placeholder} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {apiEndpoint} from "../../../App";


const Books = () => {
    const [allBooks, setAllBooks] = useState([]);

    // get all books
    useEffect(() => {
        axios
            .get(`${apiEndpoint}/books`)
            .then((response) => setAllBooks(response.data));

    });

    return (
        <Container>
                                        {/* Header Content*/}
            <div>
                <div className='text-center pb-3'>
                    <h2 className='text-uppercase'>All Available Books</h2>
                </div>
                <div className="d-flex justify-content-end">
                    <Nav.Link as={Link} to='/add-book'>
                        <Button className='btn btn-success'>Add Book</Button>
                    </Nav.Link>
                </div>
            </div>
                                        {/*All Book Is Here*/}
            <div className='py-3 bg-light rounded shadow-sm '>
                <Row>
                    {
                        allBooks.map((book, index)=> (
                            <Col md={3} className='pt-3' key={index}>
                                <Card style={{ width: '18rem' }} className='m-auto bg-white rounded-3 shadow-sm'>
                                     <Card.Img variant='top' src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" />
                                    <Card.Body variant='danger' >
                                        <Placeholder as={Card.text} animation='glow'>
                                            <p className='text-center bg-info py-2 rounded'>{book.book_name}</p>
                                            <p>Book ID:{book.book_id}</p>
                                            <p>Author: {book.authors} </p>
                                            <p>Stock: {book.stock} </p>
                                            <p>{book.description} </p>
                                        </Placeholder>

                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </div>


        </Container>
    );
};

export default Books;
