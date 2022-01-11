import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Button,
    Row,
    Card,
    Col,
    Container,
    Nav,
    Placeholder,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { apiEndpoint } from '../../../App';

const Members = () => {
    const [allMembers, setAllMembers] = useState([]);

    // get all members
    useEffect(() => {
        axios
            .get(`${apiEndpoint}/members`)
            .then((response) => setAllMembers(response.data));
    });
    return (
        <Container>
            <div className='text-center text-white-50 pb-3'>
                <h2 className='text-uppercase'>All Members</h2>
            </div>
            <div className='d-flex justify-content-end pb-3'>
                <Nav.Link as={Link} to='/add-member'>
                    <Button variant={'outline-dark'} className='nav__background text-white-50'>Add Member</Button>
                </Nav.Link>
            </div>

            <div className='py-3 text-white rounded shadow-sm '>
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

            {/*<div className="">*/}
            {/*    <Table striped bordered hover size='md' className='text-center'>*/}
            {/*        <thead>*/}
            {/*        <tr className='text-dark'>*/}
            {/*            <th>NO</th>*/}
            {/*            <th>Member ID</th>*/}
            {/*            <th>Member Name</th>*/}
            {/*            <th>Member Email</th>*/}
            {/*            <th>Member Phone</th>*/}
            {/*            <th>Member Address</th>*/}
            {/*            <th>Action</th>*/}
            {/*        </tr>*/}
            {/*        </thead>*/}
            {/*        <tbody>*/}
            {/*        <tr className=''>*/}
            {/*            <td>Nayem</td>*/}
            {/*            <td>Hello</td>*/}
            {/*            <td>Hello</td>*/}
            {/*            <td>Hello</td>*/}
            {/*            <td>Hello</td>*/}
            {/*            <td>Hello</td>*/}
            {/*            <td>*/}

            {/*                <button className='btn btn-outline-success btn-md ml-2'*/}

            {/*                        onClick={() => singleEnrolledDetails(id)}>*/}
            {/*                    DETAILS</button>*/}

            {/*                <button className='btn btn-outline-danger btn-md ml-2'*/}
            {/*                        onClick={()=> props.deleteAdmission(id)}*/}
            {/*                >*/}
            {/*                    DELETE</button>*/}

            {/*            </td>*/}
            {/*        </tr>*/}
            {/*        {*/}
            {/*            admissions.length === 0 ? 'No record to display':*/}
            {/*                admissions.map((admission, key)=> (*/}
            {/*                    <EnrolledList admission={admission} key={key}*/}
            {/*                                  deleteAdmission={deleteAdmission}*/}
            {/*                    />*/}
            {/*                ))*/}
            {/*        }*/}
            {/*        </tbody>*/}
            {/*    </Table>*/}
            {/*</div>*/}
        </Container>
    );
};

export default Members;
