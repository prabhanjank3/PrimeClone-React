import React, { Component } from "react";
import Homepage from "../components/Homepage/HomePage";
import { connect } from "react-redux";
import axios from "axios";
import Loading from "./Loading";
import Properties from "../properties";
import "../styles.css";
class Index extends Component {
  render() {
    return this.props.home_display_data_loaded ? (
      <Homepage home_display={this.props.home_display} />
    ) : (
      <Loading />
    );
  }
  componentDidMount() {
    const FINAL_URL = Properties.SERVER_URL + "/";
    axios.get(FINAL_URL).then(response => {
      this.props.loadContent(response.data);
    });
  }
}
const mapStateToProps = state => {
  return {
    home_display: state.home_display,
    home_display_data_loaded: state.home_display_data_loaded,
    isLoggedIn: state.isLoggedIn
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loadContent: home_display => {
      dispatch({ type: "DATA_LOAD_UPDATE_STATE", home_display: home_display });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
