import { Nav, Navbar, FormControl, Form, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import React, { Component } from 'react';



import AddForm from "./addMovie";
const RenderNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/Home">
      <Navbar.Brand>Home</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link >Home</Nav.Link>
          <Nav.Link >Link</Nav.Link> */}
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
          <Link to="/AddForm">
          <Button onClick={AddForm} variant="outline-success">
            Add New Movie
          </Button>
          </Link>

          <AddForm />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default RenderNav;
