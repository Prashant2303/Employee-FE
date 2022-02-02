import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import Employee from './employee';
import base_url from '../api/base_url';
import axios from 'axios';
import { toast } from 'react-toastify';

const EmployeeList=()=>{

    const [employees,setEmployees] = useState([{}/*{name:"Prashant Kumar",designation:"SDE",description:"New Joinee"},
                                                {name:"Gupta",designation:"SDE 1",description:"Pro"},
                                                {name:"Stark",designation:"CEO",description:"Billionare"},
                                                {name:"Rogers",designation:"Captain",description:"Leader"}*/])

    useEffect(() => {
        getEmpApi();
    }, []);

    const getEmpApi = () => {
        axios.get(`${base_url}/employees`).then(
            (response) => {
                console.log(response.data);
                toast.success("Data Loaded");
                setEmployees(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong");
            }
        )

    }
    
    const updateEmpList = (id) => {
        setEmployees(employees.filter((e)=> e.eid!=id));
    }

    return (
        <div className="text-center">
            {   
                employees.map( e => <Employee employee={e} update={updateEmpList} />)
            }
        </div>
    );
}

export default EmployeeList;