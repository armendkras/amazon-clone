import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../../Components/ClientComponents/LoginForm/LoginForm";
import "./Login.css";

function Login() {
  return (
    <div className="login">
    
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png"
          className="login__logo"
        />
      </Link>
      <LoginForm />
    </div>
  );
}

export default Login;
