import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import { useStateValue } from "../../../StateProvider/StateProvider";
import "./LoginAdm.css";

function LoginAdmin() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();

  // SET_USER
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)

      .then((auth) => {
        dispatch({
          type: "SET_USER",
        });
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user just logged i nor the usser was logged in
        if (authUser?.uid === "rDZNR2R7TfN1SFONuyiPhbFbHOJ3") {
          history.push("/Admin/Home");
        }
      }
    });
  }, []);

  return (
    <div className="login__containerAdm">
      <h1>Sign in as Admin</h1>
      <form>
        <h5>E-mail</h5>
        <input
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <h5> Password</h5>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button
          type="submit"
          className="login__signInButtonAdm"
          onClick={signIn}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default LoginAdmin;
