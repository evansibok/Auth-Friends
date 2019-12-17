import React, { useState } from "react";

const initialForm = {
  username: "",
  password: ""
};
export default function Login() {
  const [loginForm, setLoginForm] = useState(initialForm);

  const onInputChange = evt => {
    setLoginForm({
      ...loginForm,
      [evt.target.name]: evt.target.value
    });
  };

  const submit = (evt) => {
    evt.preventDefault();
  }

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
