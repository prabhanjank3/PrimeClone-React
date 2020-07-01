import React, { useState } from "react";
import { updateObject } from "../../utility/utility";
export default props => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cnfpassword: ""
  });
  const handleFirstNameChange = e => {
    setState(updateObject(state, { firstname: e.target.value }));
  };
  const handleLastNameChange = e => {
    setState(updateObject(state, { lastname: e.target.value }));
  };
  const handleEmailAddressChange = e => {
    setState(updateObject(state, { email: e.target.value }));
  };
  const handlePasswordChange = e => {
    setState(updateObject(state, { password: e.target.value }));
  };
  const handleCnfPasswordChange = e => {
    setState(updateObject(state, { cnfpassword: e.target.value }));
  };
  const handleOnSubmit = e => {
    props.handleOnSubmit(state);
    e.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <h4>Welcome to Prabezon Prime!</h4>
      <div className="form-group row">
        <input
          onChange={handleFirstNameChange}
          className="input"
          type="text"
          placeholder="First Name"
        />
      </div>
      <div className="form-group row">
        <input
          onChange={handleLastNameChange}
          className="input"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <div className="form-group row">
        <input
          onChange={handleEmailAddressChange}
          className="input"
          type="text"
          placeholder="Email Address"
        />
      </div>
      <div className="form-group row">
        <input
          onChange={handlePasswordChange}
          className="input"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="form-group row">
        <input
          className="input"
          onChange={handleCnfPasswordChange}
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <div className="form-group row">
        <button className="btn" type="submit">
          Sign Up
        </button>
      </div>
    </form>
  );
};
