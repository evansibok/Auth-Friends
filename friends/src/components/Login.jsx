import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import * as actionCreators from '../redux/actionCreators'

const initialForm = {
  username: "",
  password: ""
};
export function Login({ login }) {

  const history = useHistory();
  const [loginForm, setLoginForm] = useState(initialForm);

  const onInputChange = evt => {
    setLoginForm({
      ...loginForm,
      [evt.target.name]: evt.target.value
    });
  };

  const onLogin = evt => {
    evt.preventDefault();
    login(loginForm, history);
  };

  return (
    <div>
      <form onSubmit={onLogin}>
        <br />
        <label htmlFor="username">
          Username
          <input
            id="username"
            type="text"
            name="username"
            value={loginForm.username}
            onChange={onInputChange}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password
          <input
            id="password"
            type="password"
            name="password"
            value={loginForm.password}
            onChange={onInputChange}
          />
        </label>
        <br />
        <button>Login</button>
        <br />
      </form>
    </div>
  );
}


export default connect(state => state, actionCreators)(Login);
