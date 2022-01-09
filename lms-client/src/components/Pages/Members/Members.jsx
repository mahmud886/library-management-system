import React from 'react';
import { Container, Table,Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Members = () => {
    return (
        <Container>
            <div className='text-center pb-3'>
                <h2>All Members</h2>
            </div>
            <div className="d-flex justify-content-end pb-3">

                <Nav.Link as={Link} to='/add-member'>
                    <Button className='btn btn-main'>Add Member</Button>
                </Nav.Link>
            </div>

            <div className="">
                <Table striped bordered hover size='md' className='text-center'>
                    <thead>
                    <tr className='text-dark'>
                        <th>NO</th>
                        <th>Member ID</th>
                        <th>Member Name</th>
                        <th>Member Email</th>
                        <th>Member Phone</th>
                        <th>Member Address</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className=''>
                        <td>Nayem</td>
                        <td>Hello</td>
                        <td>Hello</td>
                        <td>Hello</td>
                        <td>Hello</td>
                        <td>Hello</td>
                        <td>

                            {/*<button className='btn btn-outline-success btn-md ml-2'*/}

                            {/*        onClick={() => singleEnrolledDetails(id)}>*/}
                            {/*    DETAILS</button>*/}


                            {/*<button className='btn btn-outline-danger btn-md ml-2'*/}
                            {/*        onClick={()=> props.deleteAdmission(id)}*/}
                            {/*>*/}
                            {/*    DELETE</button>*/}


                        </td>
                    </tr>
                    {/*{*/}
                    {/*    admissions.length === 0 ? 'No record to display':*/}
                    {/*        admissions.map((admission, key)=> (*/}
                    {/*            <EnrolledList admission={admission} key={key}*/}
                    {/*                          deleteAdmission={deleteAdmission}*/}
                    {/*            />*/}
                    {/*        ))*/}
                    {/*}*/}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default Members;
