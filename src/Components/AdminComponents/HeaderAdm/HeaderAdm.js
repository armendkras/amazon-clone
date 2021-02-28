import React from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import { useStateValue } from "../../../StateProvider/StateProvider";
import "./HeaderAdm.css";

function HeaderAdm() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const logout = () => {
    if (user) {
      auth.signOut();
      history.push("/Admin");
    }
  };
  return (
    <div className="headerAdm">
      <Link to="/Admin/Home">
        <h3>ADMIN PANEL</h3>
      </Link>
      <a onClick={logout}>
        <h5>Log Out</h5>
      </a>
    </div>
  );
}

export default HeaderAdm;
