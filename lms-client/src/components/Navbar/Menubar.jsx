import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <div className='pb-5'>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        LMS
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='m-auto'>
                            <Nav.Link as={Link} to='/dashboard'>
                                DASHBOARD
                            </Nav.Link>

                            <Nav.Link as={Link} to='/members'>
                                MEMBERS
                            </Nav.Link>
                            <Nav.Link as={Link} to='/books'>
                                BOOKS
                            </Nav.Link>
                            <Nav.Link as={Link} to='/authors'>
                                AUTHORS
                            </Nav.Link>
                            <Nav.Link as={Link} to='/publishers'>
                                PUBLISHERS
                            </Nav.Link>
                            <Nav.Link as={Link} to='/categories'>
                                CATEGORIES
                            </Nav.Link>
                            <Nav.Link as={Link} to='/issue-books'>
                                ISSUED BOOK
                            </Nav.Link>
                            <Nav.Link as={Link} to='/return-books'>
                                RETURN BOOKS
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/sign-in'>
                                LOGIN
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;
