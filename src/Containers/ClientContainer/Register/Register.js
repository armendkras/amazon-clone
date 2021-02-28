import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../../../Components/ClientComponents/RegisterForm/RegisterForm";
import "../Login/Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png"
          className="login__logo"
        />
      </Link>
      <RegisterForm />
    </div>
  );
}

export default Login;
