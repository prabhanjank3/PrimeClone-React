import React, { Component } from "react";
import "../login.css";
import axios from "axios";
import Properties from "../properties";
import HomePage from "../pages/Index";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { updateObject } from "../utility/utility";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Signin from "../components/Authentication/Signup_Form";
import LoginForm from "../components/Authentication/Login_Form";

class Login extends Component {
  state = { isAuthFailure: false, failureMsg: "" };
  createQueryString = creadentials => {
    return (
      Properties.SERVER_URL +
      "/signin/?username=" +
      creadentials.username +
      "&password=" +
      creadentials.password
    );
  };

  getAuthActionType = response => {
    switch (response.status) {
      case 200:
        return "AUTH_SUCCESS";
      case 404:
        this.setState(prevState =>
          updateObject(this.state, {
            isAuthFailure: true,
            failureMsg: "User Not Found"
          })
        );

        break;
      case 405:
        this.setState(prevState =>
          updateObject(this.state, {
            isAuthFailure: true,
            failureMsg: "Invalid Credentials"
          })
        );
        break;
      default:
        return "AUTH_FAILURE_DEFAULT";
    }
  };
  handleOnSubmit = credentials => {
    axios.get(this.createQueryString(credentials)).then(response => {
      console.log(response);
      var actionType = this.getAuthActionType(response.data);
      if (actionType === "AUTH_SUCCESS")
        this.props.authDispathch(actionType, response.data);
    });
  };

  render() {
    return !this.props.isLoggedIn ? (
      <Container>
        <Row>
          <Col lg={3} />
          <Col style={{ textAlign: "center" }} lg={6}>
            <LoginForm
              handleOnSubmit={this.handleOnSubmit}
              isLoggedIn={this.props.isLoggedIn}
            />
            <h5 style={{ textAlign: "center" }}>{this.state.failureMsg}</h5>
            <Link to="/signup">Create New Account</Link>
          </Col>
          <Col lg={3} />
        </Row>
      </Container>
    ) : (
      <HomePage />
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    userID: state.userID
  };
};
const mapDispatchToProps = dispatch => {
  return {
    authDispathch: (actionType, obj) => {
      dispatch({ type: actionType, payLoad: obj });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
