import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

const UpdateEmp = (id) => {

    return (
        <div >
            <h2 className='text-center my-1'> Enter Updated Employee Details </h2>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
            </Form>
                {/* <Form onSubmit={formhandler}>
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
                    <Button type='submit' color='primary'> Update </Button>
                    <Button className='ml-2' type='reset' >Clear</Button>
                </Container>
            </Form> */}
        </div>
    )
}

export default UpdateEmp;