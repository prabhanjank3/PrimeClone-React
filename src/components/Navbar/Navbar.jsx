import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../navbar.css";
export default props => {
  console.log(props);
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home" className="navbar-brand">
        <Link to="/" className="brand-link">
          Prebhuzon Prime
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home" />
      </Nav>
      <Form inline>
        {!props.authData.isLoggedIn ? (
          <Link to="/login">
            <Button className="login-btn" variant="outline-info">
              Login
            </Button>
          </Link>
        ) : (
          props.authData.firstName
        )}
      </Form>
    </Navbar>
  );
};
