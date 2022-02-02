import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';

const Menu = (props) => {
  return (
    <div>
      {/* <h3>Anchors </h3>
      <p>Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.</p> */}
      <ListGroup>
        <Link className='list-group-item list-group-item-action' tag="a" to="/"> Home </Link>
        <Link className='list-group-item list-group-item-action' tag="a" to="/add-employee"> Add Employee </Link>
        <Link className='list-group-item list-group-item-action' tag="a" to="/employee-list"> List All Employees </Link>
        <Link className='list-group-item list-group-item-action' tag="a" to="#"> Contact </Link>
        <Link className='list-group-item list-group-item-action' tag="a" to="#"> About </Link>
      </ListGroup>
    </div>
  );
}

export default Menu;