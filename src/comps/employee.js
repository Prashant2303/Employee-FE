import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Card,CardBody,CardSubtitle,CardTitle,CardText,Button } from 'reactstrap';
import base_url from '../api/base_url';

const Employee=({ employee, update })=>{

    const delEmp = (id) => {
        axios.delete(`${base_url}/employee/${id}`).then(
            (response) => {
                console.log(id);
                toast.success("Deleted Successfully");
                update(id);
            },
            (error) => {
                toast.error('Something went Wrong');
            }
        )
    };

    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold">{ employee.eid }</CardTitle>
                    <CardSubtitle>{ employee.ename }</CardSubtitle>
                    <CardText>{ employee.esalary }</CardText>
                    <Button className='mr-2' color="primary"> <Link style={{color:'white', textDecorationLine:'none'}} to='/update-employee' > Update </Link></Button>
                    <Button color="danger" onClick={()=>{delEmp(employee.eid)}} >Delete</Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default Employee;