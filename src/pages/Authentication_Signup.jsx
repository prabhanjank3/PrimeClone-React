import React, { Component } from "react";
import SignUpForm from "../components/Authentication/Signup_Form";
import { Container, Row, Col } from "react-bootstrap";
import { makeQueryString, updateObject } from "../utility/utility";
import Properties from "../properties";
import Login from "./Authentication";
import axios from "axios";
class SignUp extends Component {
  state = {
    isSignedUp: false
  };
  validateCnfPassword = (pass, cnfpass) => {
    return true;
  };
  handleOnSubmit = state => {
    if (this.validateCnfPassword(state.password, state.cnfpassword))
      var querystrting = makeQueryString(state);
    var FINAL_URL = Properties.SERVER_URL + "/signup/?" + querystrting;
    axios.get(FINAL_URL).then(() => {
      this.setState({ isSignedUp: true });
    });
  };
  render() {
    return this.state.isSignedUp ? (
      <Login />
    ) : (
      <Container>
        <Row>
          <Col lg={3} />
          <Col lg={6}>
            <SignUpForm handleOnSubmit={this.handleOnSubmit} />;
          </Col>
          <Col lg={3} />
        </Row>
      </Container>
    );
  }
}
export default SignUp;
