import React, { useState } from "react";
import "../../auth.css";
import { updateObject } from "../../utility/utility";

export default props => {
  const [state, setState] = useState({ username: "", password: "" });

  const handleUsernameChange = e => {
    setState(updateObject(state, { username: e.target.value }));
  };
  const handlePasswordChange = e => {
    setState(updateObject(state, { password: e.target.value }));
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
          className="input"
          onChange={handleUsernameChange}
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="form-group row">
        <input
          className="input"
          onChange={handlePasswordChange}
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="form-group row">
        <button className="btn" type="submit">
          Log In
        </button>
      </div>
    </form>
  );
};
