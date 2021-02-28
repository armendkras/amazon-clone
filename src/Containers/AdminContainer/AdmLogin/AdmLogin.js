import React from "react";
import LoginAdmin from "../../../Components/AdminComponents/LoginAdmin/LoginAdmin";
import "./AdmLogin.css";

function AdmLogin() {
  return (
    <div className="loginAdm">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png"
        className="login__logo"
      />

      <LoginAdmin />
    </div>
  );
}

export default AdmLogin;
