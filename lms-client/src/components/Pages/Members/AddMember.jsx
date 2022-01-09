import React, {useState} from 'react';
import {Container, Form, Button} from "react-bootstrap";
import axios from 'axios';
import {apiEndpoint} from '../../../App'
const AddMember = () => {

    const [member, setMember] = useState([]);

    // Post state
    const [memberDetail, setMemberDetail] = useState({
        member_id: '',
        member_name: '',
        member_email: '',
        member_phone: '',
        member_address: '',
    });

    // ${apiEndpoint}/courseresults

    let name, value;

    const handleMemberValues = (event) => {
        name = event.target.name;
        value = event.target.value;

        setMemberDetail({...memberDetail, [name]:value});
    }



    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(memberDetail);

        axios
            .post(`${apiEndpoint}/add-member`, memberDetail)
            .then((response) => {
                alert('Member Data Successfully Store to Database..');
            })
            .catch((err) => {
                console.log(err);
            });

        setMemberDetail({
            member_id: '',
            member_name: '',
            member_email: '',
            member_phone: '',
            member_address: '',
        });

    };


    return (
        <div>
            <Container>
                <div className="">
                    <h2 className=' text-center rounded h1'>
                        Add Member
                    </h2>
                </div>
                <div className="pt-2 border rounded">
                    <Form className='m-3'
                          onSubmit={(event)=> onSubmitHandler(event)}
                    >
                        <Form.Group controlId="formStudentName" className='pt-2'>
                            <Form.Label>Student Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Student Name" required />
                        </Form.Group>


                        <Form.Group controlId="formCoursesCategory" className='pt-2'>
                            <Form.Label>Courses Category</Form.Label>
                            <Form.Control type="text" placeholder="Enter Courses Category " required/>
                        </Form.Group>


                        <Form.Group controlId="formStudentSerialNumber" className='pt-2'>
                            <Form.Label>Student Serial Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Student Serial Number" required/>
                        </Form.Group>


                        <Form.Group controlId="formStudentCertificateNumber" className='pt-2'>
                            <Form.Label>Student Certificate Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Student Certificate Number" required/>
                        </Form.Group>



                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Please Re-check" className='text-danger' required/>
                        </Form.Group>


                        <Button className='btn btn-main btn-md' type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default AddMember;