import React from 'react';
import { useState } from 'react';

import { Container, Row, Col, Table } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

import {apiEndpoint} from '../../../App'

const AddBook = () => {
    const [allBooks, setAllBooks] = useState([]);

    // Post
    const [books, setBooks] = useState({
        book_id: '',
        book_name: '',
        authors: '',
        publisher: '',
        stock: '',
        description: ''
    });
    let name, value;

    const handleBooksValues = (e) => {
        name = e.target.name;
        value = e.target.value;
        setBooks({ ...books, [name]: value });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(books);
        axios
            .post(`${apiEndpoint}/add-book`, books)
            .then((response) => {
                alert('Book Successfully Store to Database..');
            })
            .catch((err) => {
                console.log(err);
            });

        setBooks({
            book_id: '',
            book_name: '',
            authors: '',
            publisher: '',
            stock: '',
            description: ''
        });
    };
    // get
    useEffect(() => {
        axios
            .get(`${apiEndpoint}/books`)
            .then((response) => setAllBooks(response.data));
        // console.log(allBooks);
    });

    // Delete Data
    const deletebook = (id) => {
        axios
            .delete(`${apiEndpoint}/delete-book/${id}`)
            .then((res) => res.data);
    };
    return (
        <>
            <Container>
                <div className='top-header text-center pb-3'>
                    <h3 className='text-uppercase'>All Library Books</h3>
                </div>

                {/* Create Notice */}
                <Row>
                    <Col md={3}>
                        <div className='shadow-sm bg-white rounded'>
                            <div className='inner__container  px-3 pb-3'>
                                <h5 className='py-1'>Add New Book</h5>

                                {/* Form */}
                                <Form onSubmit={(e) => onSubmitHandler(e)}>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formBookIDName'>
                                        <Form.Label className='text-muted'>
                                            Book ID
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Book ID'
                                            name='book_id'
                                            value={books.book_id}
                                            onChange={handleBooksValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formBookName'>
                                        <Form.Label className='text-muted'>
                                            Book Name
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Book Name'
                                            name='book_name'
                                            value={books.book_name}
                                            onChange={handleBooksValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formAuthorName'>
                                        <Form.Label className='text-muted'>
                                            Author's Name
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Authors Name'
                                            name='authors'
                                            value={books.authors}
                                            onChange={handleBooksValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3 '
                                        controlId='formPublisherName'>
                                        <Form.Label className='text-muted'>
                                            Publisher Name
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Publisher Name'
                                            name='publisher'
                                            value={books.publisher}
                                            onChange={handleBooksValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3 '
                                        controlId='formBookAvailable'>
                                        <Form.Label className='text-muted'>
                                            Book Available
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Book Available'
                                            name='stock'
                                            value={books.stock}
                                            onChange={handleBooksValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3 '
                                        controlId='formPublishedYear'>
                                        <Form.Label className='text-muted'>
                                            Book Short Description
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Book Short Bio'
                                            name='description'
                                            value={books.description}
                                            onChange={handleBooksValues}
                                        />
                                    </Form.Group>

                                    <button
                                        className='btn btn-outline-success btn-md px-4'
                                        type='submit'>
                                        Save
                                    </button>
                                </Form>
                            </div>
                        </div>
                    </Col>

                    {/* Notice Board */}
                    <Col md={9}>
                        <div className='shadow-sm bg-white rounded'>
                            <div className='inner__container px-3 py-3 '>
                                <h5 className='py-3'>All Books</h5>

                                <Table
                                    striped
                                    bordered
                                    rounded
                                    hover
                                    size='lg'
                                    className='text-center'>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Book ID</th>
                                        <th>Book Name</th>
                                        <th>Authors</th>
                                        <th>Publisher</th>
                                        <th>Stock</th>
                                        <th>Description</th>

                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    {allBooks.map((book, index) => (
                                        <tbody>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{book.book_id}</td>
                                            <td>{book.book_name}</td>
                                            <td>{book.authors}</td>
                                            <td>{book.publisher}</td>
                                            <td>{book.stock}</td>
                                            <td>{book.description}</td>

                                            <td>
                                                <p>
                                                        <span>
                                                            <button className='btn'>
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faEdit
                                                                    }
                                                                />
                                                            </button>
                                                            <button
                                                                className='btn'
                                                                onClick={() => {
                                                                    const confirmDelete =
                                                                        window.confirm(
                                                                            `Do you want to delete ${books.book_name}`
                                                                        );
                                                                    if (
                                                                        confirmDelete ===
                                                                        true
                                                                    ) {
                                                                        deletebook(
                                                                            book._id
                                                                        );
                                                                    }
                                                                }}>
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faTrashAlt
                                                                    }
                                                                />
                                                            </button>
                                                        </span>
                                                </p>
                                            </td>
                                        </tr>
                                        </tbody>
                                    ))}
                                </Table>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>



    );
};

export default AddBook;