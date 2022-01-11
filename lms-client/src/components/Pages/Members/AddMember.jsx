import React from 'react';
import { useState } from 'react';

import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

import { apiEndpoint } from '../../../App';
const AddMember = () => {
    const [allMembers, setAllMembers] = useState([]);

    // Post state
    const [members, setMembers] = useState({
        member_id: '',
        member_name: '',
        member_email: '',
        member_phone: '',
        member_address: '',
    });

    let name, value;

    const handleMemberValues = (event) => {
        name = event.target.name;
        value = event.target.value;
        setMembers({ ...members, [name]: value });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(members);

        axios
            .post(`${apiEndpoint}/add-member`, members)
            .then((response) => {
                alert('Member Data Successfully Store to Database..');
            })
            .catch((err) => {
                console.log(err);
            });

        setMembers({
            member_id: '',
            member_name: '',
            member_email: '',
            member_phone: '',
            member_address: '',
        });
    };

    // get
    useEffect(() => {
        axios
            .get(`${apiEndpoint}/members`)
            .then((response) => setAllMembers(response.data));
        // console.log(allBooks);
    });

    // Delete Data
    const deleteMember = (id) => {
        axios
            .delete(`${apiEndpoint}/delete-member/${id}`)
            .then((res) => res.data);
    };

    return (
        <div >
            <Container fluid>
                <div className='text-center pb-3'>
                    <h2 className='text-uppercase text-white-50'>Add Member</h2>
                </div>

                {/* Create Notice */}
                <Row >
                    <Col md={3}>
                        <div className='shadow-lg nav__background rounded'>
                            <div className='inner__container  px-3 pb-3'>
                                <h5 className='py-1 text-center text-uppercase text-white-50'>Add Member</h5>

                                {/* Form */}
                                <Form
                                    onSubmit={(event) =>
                                        onSubmitHandler(event)
                                    }>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formMemberIDName'>
                                        <Form.Label className='text-muted'>
                                            Member ID
                                        </Form.Label>
                                        <Form.Control
                                            className='nav__background rounded-pill'
                                            type='text'
                                            placeholder='Enter Member ID'
                                            name='member_id'
                                            value={members.member_id}
                                            onChange={handleMemberValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formMemberName'>
                                        <Form.Label className='text-muted'>
                                            Member Name
                                        </Form.Label>
                                        <Form.Control
                                            className='nav__background rounded-pill'
                                            type='text'
                                            placeholder='Enter Member Name'
                                            name='member_name'
                                            value={members.member_name}
                                            onChange={handleMemberValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formMemberEmail'>
                                        <Form.Label className='text-muted'>
                                            Member Email
                                        </Form.Label>
                                        <Form.Control
                                            className='nav__background rounded-pill'
                                            type='text'
                                            placeholder='Enter Member Email'
                                            name='member_email'
                                            value={members.member_email}
                                            onChange={handleMemberValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3 '
                                        controlId='formMemberPhone'>
                                        <Form.Label className='text-muted'>
                                            Member Phone
                                        </Form.Label>
                                        <Form.Control
                                            className='nav__background rounded-pill'
                                            type='text'
                                            placeholder='Enter Member Phone'
                                            name='member_phone'
                                            value={members.member_phone}
                                            onChange={handleMemberValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3 '
                                        controlId='formMemberAddress'>
                                        <Form.Label className='text-muted'>
                                            Member Address
                                        </Form.Label>
                                        <Form.Control
                                            className='nav__background rounded-pill'
                                            type='text'
                                            placeholder='Enter Member Address'
                                            name='member_address'
                                            value={members.member_address}
                                            onChange={handleMemberValues}
                                        />
                                    </Form.Group>

                                    <div className='d-grid gap-2 py-2'>
                                        <Button className='rounded-pill text-white-50'
                                                size='lg'
                                                variant={'outline-dark'}
                                                type={'submit'}
                                        >
                                            Save data to Database
                                        </Button>
                                    </div>


                                </Form>
                            </div>
                        </div>
                    </Col>

                    {/*Notice Board */}
                    <Col md={9}>
                        <div className='shadow-lg rounded'>
                            <div className='inner__container'>
                                <Table
                                    bordered
                                    rounded
                                    hover
                                    size='lg'
                                    className='text-center text-white-50'>
                                    <h5 className='text-uppercase pb-3 text-center'>All Books</h5>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Member ID</th>
                                            <th>Member Name</th>
                                            <th>Member Email</th>
                                            <th>Member Phone</th>
                                            <th>Member Address</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    {allMembers.map((member, index) => (
                                        <tbody>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{member.member_id}</td>
                                                <td>{member.member_name}</td>
                                                <td>{member.member_email}</td>
                                                <td>{member.member_phone}</td>
                                                <td>{member.member_address}</td>

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
                                                                            `Do you want to delete ${member.member_name}`
                                                                        );
                                                                    if (
                                                                        confirmDelete ===
                                                                        true
                                                                    ) {
                                                                        deleteMember(
                                                                            member._id
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
        </div>
    );
};

export default AddMember;
