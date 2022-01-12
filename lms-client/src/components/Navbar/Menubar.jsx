import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth/useAuth';

const Menubar = () => {
    const {user,logOut}=useAuth()
    return (
        <div className='pb-3'>
            <Navbar collapseOnSelect expand='lg'  variant='dark' className='nav__background'>
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
                            {
                                user?.email? 
                                <span style={{color:'#fff'}}>
                                      <span className='me-3'>{user.displayName}</span>
                                    <button onClick={logOut}>Log Out</button>
                                </span>
                                :
                                <Nav.Link as={Link} to='/sign-in'>
                                LOGIN
                            </Nav.Link>
                            }
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;
