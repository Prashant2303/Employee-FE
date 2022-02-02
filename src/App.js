import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './comps/header';
import { Button, Container, Col, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './comps/home';
import Employee from './comps/employee';
import EmployeeList from './comps/employeelist';
import AddEmployee from './comps/addEmployee';
import Menu from './comps/menu';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UpdateEmp from './comps/updateEmployee';

function App() {

  const notify = () => toast.success("Wow so easy!");

  return (
    <Router>
      <div>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
        />

        {/* <Home />
      <Button color="primary" onClick={notify}>First Button</Button>
      <EmployeeList />
    <AddEmployee /> */}
        <Container>
          <Header name="Prashant Kumar" />
          <Row>
            <Col md={3}>
              <Menu />
            </Col>
            <Col md={9}>
              <Route path="/" exact><Home /></Route>
              <Route path="/add-employee" exact><AddEmployee /></Route>
              <Route path="/employee-list" exact><EmployeeList /></Route>
              <Route path="/update-employee" exact><UpdateEmp /></Route>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
