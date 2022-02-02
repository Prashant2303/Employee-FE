import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import base_url from '../api/base_url';

const AddEmployee = () => {

    const[emp,setEmp] = useState({});

    const formhandler = (formData) => {
        // const[eid,ename,esalary] = [formData.target.eid.value, formData.target.name.value, formData.target.sal.value];
        // setEmp({eid,ename,esalary});
        console.log(emp);
        postToServer(emp);
        formData.preventDefault();
    }

    const postToServer = (data) => {
        axios.post(`${base_url}/addEmp`,data).then(
            (response) => {
                console.log(response);
                toast.success('Employee Added');
            },
            (error) => {
                console.log(error);
                toast.error('Something went Wrong');
            }
        )
    }

    return(
        <div >
            <h2 className='text-center my-1'> Enter Employee Details </h2>
            <Form onSubmit={formhandler}>
                <FormGroup>
                    <Label for="eid">EmployeeID</Label>
                    <Input type="number" name="eid" id="eid" placeholder="Enter Employee ID" onChange={(formData)=>{setEmp({...emp,eid:parseInt(formData.target.value)})}}/>
                </FormGroup>
                <FormGroup>
                    <Label for="Name">Name</Label>
                    <Input type="text" name="name" id="name" placeholder="Enter Name" onChange={(formData)=>{setEmp({...emp,ename:formData.target.value})}}/>
                </FormGroup>
                <FormGroup>
                    <Label for="Salary">Salary</Label>
                    <Input type="number" name="sal" id="sal" placeholder="Enter Salary" onChange={(formData)=>{setEmp({...emp,esalary:parseInt(formData.target.value)})}}/>
                </FormGroup>
                <Container className="text-center">
                    <Button type='submit' color='primary'>Submit</Button>
                    <Button className='ml-2' type='reset' >Clear</Button>
                </Container>
            </Form>
        </div>
    )
}

export default AddEmployee;