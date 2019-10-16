import React, { useRef } from "react";
import axios from "axios";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const submitHandler = props => {
    axios
      .post("http://localhost:5000", {
        username: usernameRef.current.value(),
        password: usernameRef.current.value()
      })
      .then(res => {
        localStorage.getItem("token", res.data.token);

        props.history.push("/api/friends");
      });
  };
  return (
    <div>
      <input type="text" ref={usernameRef} placeholder="Username" />
      <br />

      <input type="password" ref={passwordRef} placeholder="Password" />
      <br />

      <button type="button">Login</button>
    </div>
  );
};

export default Login;
