import React, { useState } from "react";
import "./LoginForm.css";
import { auth } from "../../../firebase/firebase";
import { Link, useHistory } from "react-router-dom";

function LoginForm() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login__container">
      <h1>Sign in</h1>
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
        <button type="submit" className="login__signInButton" onClick={signIn}>
          Sign in
        </button>
      </form>
      <p>
        By continuing, you agree to Amazon's Conditions of Use and Privacy
        Notice.
      </p>
      <Link to="/Register">
        <button className="login__registerButton">
          Create your Amazon Account
        </button>
      </Link>
    </div>
  );
}

export default LoginForm;
