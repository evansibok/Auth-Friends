import React, { useState } from "react";
import axiosWithAuth from "./axios";

const initialForm = {
  username: "",
  password: ""
};
export default function Login(props) {
  const [loginForm, setLoginForm] = useState(initialForm);
  const [isLoading, setIsLoading] = useState(false);

  const onInputChange = evt => {
    setLoginForm({
      ...loginForm,
      [evt.target.name]: evt.target.value
    });
  };

  const submit = (evt) => {
    evt.preventDefault();

    axiosWithAuth()
      .post(`http://localhost:7000/api/login`, loginForm)
      .then( res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push("/dashboard")
      })
      .catch( err => alert(err.message));
  };

  return (
    <div>
      <form onSubmit={submit}>
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
