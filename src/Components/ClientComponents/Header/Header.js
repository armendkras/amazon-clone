import React from "react";
import "./Header.css";
import Search from "./Search/Search";
import HeaderNav from "./HeaderNav/HeaderNav";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <Search />
      <HeaderNav />
    </div>
  );
}

export default Header;
