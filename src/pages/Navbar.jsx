import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import { connect } from "react-redux";

class Nav extends Component {
  render() {
    return <Navbar authData={this.props} />;
  }
}
const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    firstName: state.firstName
  };
};
export default connect(mapStateToProps)(Nav);
