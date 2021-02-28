import React, { useState } from "react";
import "../LoginForm/LoginForm.css";
import { auth } from "../../../firebase/firebase";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login__container">
      <h1>Register</h1>
      <form>
        <h5>E-mail</h5>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h5> Password</h5>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <p>
        By continuing, you agree to Amazon's Conditions of Use and Privacy
        Notice.
      </p>
      <button onClick={register} className="login__registerButton">
        Create your Amazon Account
      </button>
    </div>
  );
}

export default LoginForm;
